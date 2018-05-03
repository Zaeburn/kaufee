
const express = require('express')
const router = express.Router()

const db = require('../db/users')

router.post('/register', register)

router.get('/', (req, res) => res.send('hi'))

function register (req, res) {
  db.userExists(req.body.username)
    .then(exists => {
      if(exists) {
        return res.status(400).send({ message: 'User exists'})
      }
      db.createUser(req.body.username, req.body.name, req.body.password)
        .then(() => res.status(201).end())
    })
    .catch(err => {
      res.status(500).send({ message: err.message })
    })
}

module.exports = router