const router = require('express').Router()
const usersControllers = require('./controllers/usersController')
const cors = require('cors')
const postMiddlewares = require('./middlewares/postMiddlewares').validatePost
const deleteMiddlewares = require('./middlewares/deleteMiddlewares').validateDelete
const putMiddleware = require('./middlewares/putMiddlewares').validatePut

router.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT","DELETE"],
    credentials: true
}))




router.get('/', (req,res) => res.send('ROUTER OK'))
router.get('/Users', usersControllers.getUsers)
router.post('/Users', postMiddlewares, usersControllers.createUser)
router.delete('/Users/:id', deleteMiddlewares, usersControllers.deleteUser)
router.put('/Users/', putMiddleware,usersControllers.updateUser)



module.exports = router