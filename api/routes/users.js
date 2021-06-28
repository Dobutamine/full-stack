const Joi = require('joi')
const express = require('express')
const router = express.Router()

const users = [
  { id: 1, name:'yoda' },
  { id: 2, name: 'leia' },
  { id: 3, name: 'han' },
  { id: 4, name: 'obi-wan' },
  { id: 5, name: 'luketje' }
]
router.get('/users', (req, res) => {
  // return all users
  res.send(users)
})

router.get('/:name', (req, res) => {
  // find id
  const user = users.find(u => u.name === req.params.name.toLowerCase())
  if (!user) return res.status(404).send('user not found')
  
  // return the user
  res.send(user)
})

router.post('/:name', (req, res) => {
  // validate request
  // make new user id and database entry
  // return the user
})

router.put('/:name', (req, res) => {
  // validate request
  // find user
  // update information
  // return the user
})

function validateUser(user) {
  const schema = Joi.object(
    {
      name: Joi.string().min(3).required(),
    }
  )

  return schema.validate(user)
}

module.exports = router

