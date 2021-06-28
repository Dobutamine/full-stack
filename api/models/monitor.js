const mongoose = require('mongoose')

const monitorSchema = mongoose.Schema( {
  hr: { type: Number, default: 125 },
  sat_pre: { type: Number, default: 97 },
  sat_post: { type: Number, default: 95 }
})

const Monitor = mongoose.Model('Monitor', monitorSchema)

module.exports = Monitor
