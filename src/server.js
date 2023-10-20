const app = require('./app')
const cors = require('cors')
require('dotenv').config()

PORT = process.env.APP_PORT || 5506
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT","DELETE"],
    credentials: true
}))
app.listen(PORT, () => console.log(`Server Running at ${PORT}`))