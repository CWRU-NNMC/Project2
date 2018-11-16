const { selectAll, selectSome, selectSomeWhere, selectSomeJoin, insertOne, updateOne, deleteOne } = require('./orm')
const jwt = require('jsonwebtoken')

// jwt params
const options = { expiresIn: '1d', issuer: 'localhost' }
const secret = process.env.JWT_SECRET


const dbLib = (() => {


  const checkUserName = name => {
    return selectSomeWhere('users', 'username', name, ['username'])
    .then(data => !data.length)
  }

  const checkPortfolioName = name => {
    return selectSomeWhere('portfolios', 'name', name, ['name'])
    .then(data => !data.length)
  }

  const authUser = loginObject => {
    let { userName, password } = loginObject
    return selectSomeWhere('users', 'username', userName, ['username', 'pw'])
    .then(data => {
      if (data.length === 0) return {
        code: 404,
        message: `The username '${userName}' is incorrect.`,
        auth: false
      }
      if (data[0].pw !== password) return {
        code: 403,
        message: 'The password you entered is incorrect.',
        auth: false
      }

      const token = jwt.sign({ userName }, secret, options)
      // console.log(token)
        return {
          code: 200,
          auth: true,
          token,
          userName
        }      
    })
  }


  // takes a user name, and returns relevant information for their user info page
  const userPageFunction = (name, token) => {
    // Grab the corresponding userID, to be used in Promise.all 
    return selectSomeWhere('users', 'username', name, ['id', 'username'])
    .then(data => {
      // if (data.length === 0) throw new Error(`500: No such user '${name}' found.`)
      if (data.length === 0) throw {
        code: 500,
        message: `No such user '${name}' found.`
      }
      let userName = data[0].username
      let result = jwt.verify(token, secret, options)
      console.log(result)
      let id = data[0].id
      // let tokenMatch = 
      // make two DB calls, one for user info and one for portfolio info
      return Promise.all([
        selectSomeWhere('users', 'id', id, ['id', 'username','email', 'userimage', 'location']),
        selectSomeWhere('portfolios', 'usersid', id, ['id', 'description', 'name'])
      ])
    })
    // parse the user info and portfolio info into a single object
    .then(userData => {
      let user = userData[0][0]
      
      let portfolioArray = userData[1].length === 0 ? [] : userData[1]
      return {
        userName: user.username,
        userId: user.id,
        userEmail: user.email,
        userLocation: user.location,
        userImage: user.userimage,
        userPortfolios: portfolioArray
      }
    })
  }

  // takes a portfolio name, and return relevant information needed to render the page. Can also be used on a User Dashboard page
  const portfolioPageFunction = name => {
    // grab the corresponding portfolio ID
    return selectSomeWhere('portfolios', 'name', name, ['id'])
    .then(data => {
      if (data.length === 0) throw new Error(`500: No such portfolio '${name}' found.`)
      let id = data[0].id
      return selectSomeJoin('portfolios', 'projects', ['config', 'name', 'public'], ['id', 'imageurl', 'githuburl', 'description'], 'portfolios.id', 'projects.portfolioid', 'portfolios.id', id)
    })
  }

  // adds a new user to the database, takes a user object with the following keys: 
  // userName, email, pw, preferences (JSON), location (optional), userImage (optional)
  // returns confirmation message
  const addNewUser = user => {
    let location = user.location || null
    let userImage = user.userImage || null
    let preferences = JSON.stringify(user.preferences)
    return insertOne('users', ['username', 'email', 'pw', 'preferences', 'location', 'userimage'], [user.userName, user.email, user.pw, preferences, location, userImage])
    .then(results => {
      if (results.affectedRows === 0) throw new Error(`500: User '${user.userName}' not added.`)
      return results
    })
  }

  // updates user information, takes a user object with two keys: userName and updates.
  // updates should be an object with key/value pairs corresponding to column names/values to be updated
  // returns confirmation message
  const updateUser = updateObj => {
    let { userName, updates } = updateObj
    return updateOne('users', updates, `username = '${userName}'`)
    .then(results => {
      if (results.affectedRows === 0) throw new Error('500: No rows updated.')
      return results
    })
  }
  
  const addNewPortfolio = portfolio => {
    let { technologies, description, usersid, config, name } = portfolio
    let configJSON = JSON.stringify(config)
    if (name.length > 20) throw new Error('500: Portfolio name exceeds length (20 characters maximum')
    return insertOne('portfolios', ['technologies', 'description', 'usersid', 'config', 'name'], [technologies, description, usersid, configJSON, name])
    .then(results => {
      if (results.affectedRows === 0) throw new Error('500: Portfolio not added.')
      return results
    })
  }

  const updatePortfolio = updateObj => {
    let { portfolioName, updates } = updateObj
    return updateOne('portfolios', updates, `name = '${portfolioName}'`)
    .then(results => {
      if (results.affectedRows === 0) throw new Error('500: No rows updated.')
      return results
    })
  }

  const addNewProject = project => {
    let { imageurl, githuburl, description, usersid, portfolioid } = project
    return insertOne('projects', ['imageurl', 'githuburl', 'description', 'usersid', 'portfolioid'], [imageurl, githuburl, description, usersid, portfolioid])
    .then(results => {
      if (results.affectedRows === 0) throw new Error('500: Project not added.')
      return results
    })
  }

  const updateProject = updateObj => {
    let { projectId, updates } = updateObj
    return updateOne('projects', updates, `id = '${projectId}'`)
    .then(results => {
      if (results.affectedRows === 0) throw new Error('500: No rows updated.')
      return results
    })
  }

  const deleteUser = name => {
    return deleteOne('users', `username = '${name}'`)
    .then(results => {
      if (results.affectedRows === 0) throw new Error('500: No user deleted.')
      return results
    })
  }

  const deletePortfolio = name => {
    return deleteOne('portfolios', `name = '${name}'`)
    .then(results => {
      if (results.affectedRows === 0) throw new Error('500: No portfolio deleted.')
      return results
    })
  }

  const deleteProject = id => {
    return deleteOne('projects', `id = '${id}'`)
    .then(results => {
      if (results.affectedRows === 0) throw new Error('500: No portfolio deleted.')
      return results
    })
  }





  // Handles errors that are thrown by MySQL. Stick this in the catch block to 'translate' them
  const dbErrorHandler = error => {
    const errorInfo = {
      1062: 'Sorry, this name is already taken, please choose another.',
      1048: 'Missing information, ensure all fields are filled out.',
      1452: 'The parent user or portfolio in question does not exist.'
    }
    let message = errorInfo[error.errno] || `Undocumented error code ${error.errno || error}`
    console.log(message)
  }
  // public methods
  return {
    checkUserName,
    checkPortfolioName,
    userPageFunction,
    portfolioPageFunction,
    addNewUser,
    updateUser,
    addNewPortfolio,
    updatePortfolio,
    addNewProject,
    updateProject,
    dbErrorHandler,
    deleteUser,
    deletePortfolio,
    deleteProject,
    authUser
  }
})()

module.exports = dbLib

