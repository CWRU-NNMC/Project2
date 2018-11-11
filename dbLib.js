const { selectAll, selectSome, selectSomeWhere, insertOne, updateOne } = require('./orm')

const dbLib = (() => {

  // takes a user name, and returns relevant information for their user info page
  const userPageFunction = name => {
    // Grab the corresponding userID, to be used in Promise.all 
    return selectSomeWhere('users', 'username', name, ['id'])
    .then(data => {
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
      let portfolioArray = userData[1]
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

  // public methods
  return {
    userPageFunction: userPageFunction
  }
})()


module.exports = dbLib

