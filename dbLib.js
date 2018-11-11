const { selectAll, selectSome, selectSomeWhere, selectSomeJoin, insertOne, updateOne } = require('./orm')

const dbLib = (() => {



  // takes a user name, and returns relevant information for their user info page
  const userPageFunction = name => {
    // Grab the corresponding userID, to be used in Promise.all 
    return selectSomeWhere('users', 'username', name, ['id'])
    .then(data => {
      if (data.length === 0) throw new Error(`Error: No such user '${name}' found.`)
      let id = data[0].id
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
      let id = data[0].id
      return selectSomeJoin('portfolios', 'projects', ['config', 'name'], ['id', 'imageurl', 'githuburl', 'description'], 'portfolios.id', 'projects.portfolioid', 'portfolios.id', id)
    })
  }

  // public methods
  return {
    userPageFunction,
    portfolioPageFunction
  }
})()

module.exports = dbLib

