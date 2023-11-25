const app = require('./app')
const cors = require('cors')
require('dotenv').config()

PORT = 80
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT","DELETE"],
    credentials: true
}))
app.listen(PORT, () => console.log(`Server Running at ${PORT}`))
