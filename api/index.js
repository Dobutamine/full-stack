const express = require('express')
const mongoose = require('mongoose')
const app = express();

// connect to the mongodb
// get the connection string from the environment variables
const dbUrl = process.env.DB_URL || "mongodb://localhost/monemu";

mongoose.connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log('Connected to Mongodb'))
.catch((err) => console.log('Could not connect to Mongodb: ', err))

// import the routes
const home = require('./routes/home')
const users = require('./routes/users')

// use som of the inbuild middleware
app.use(express.json())
app.use(express.static('public'))

// required environment variables
// NODE_ENV determines which config is being loaded (development/production)
// DEBUG determines which debugger is set
// APP_PASSWORD stores the password

// register the routes
app.use('/api', home)
app.use('/api/users', users)

// define the port to 3000 if not set by an enviroinment variable
const port = process.env.PORT || 8080

// start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
