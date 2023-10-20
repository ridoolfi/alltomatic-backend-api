const express = require('express')
const app = express()
const router = require('./router')
const cors = require("cors")

app.use(express.json())
app.use(router)
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))
module.exports = app
