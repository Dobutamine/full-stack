const Joi = require('joi')
const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  // validate request
  // return all content
})

router.get('/:id', (req, res) => {
  // validate request
  // find id
  // return content
})

router.post('/:id', (req, res) => {
  // validate request
  // make new content and put it into the server public directory
  // return the user
})


