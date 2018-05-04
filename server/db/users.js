const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const knex = require('knex')(config)
const { generate } = require('../auth/hash')

module.exports = {
  userExists,
  createUser,
  getCredsByName
}

function getCredsByName (username, db=knex) {
  return db('creds')
    .select()
    .where('username', username)
    .first()
}

function userExists(username, db = knex) {
  return db('creds')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

function createUser(username, name, password, db = knex) {
  const hash = generate(password)
  return db('creds')
    .insert({
      username,
      hash
    })
    .then((id) => {
      db('users')
      .insert({
        cred_id: id,
        name,
        order_text: ''
      })
    })
}
