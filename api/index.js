const express = require('express')
const app = express();

const db = require("./db");
db.connect()

// import the routes
const home = require('./routes/home')
const users = require('./routes/users')
const auth = require('./routes/auth')

// use som of the inbuild middleware
app.use(express.json())
app.use(express.static('public'))


// register the routes
app.use('/api', home)
app.use('/api/users', users)
app.use('/api/auth', auth)

// define the port to 3000 if not set by an enviroinment variable
const port = process.env.PORT || 8080

// start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
