const router = require('express').Router();
const usersControllers = require('./controllers/usersController');
const dataControllers = require('./controllers/dataControllers');

const cors = require('cors')
const loginMiddleware = require('./middlewares/authMiddlewares');
const postMiddlewares = require('./middlewares/postMiddlewares').validatePost;
const deleteMiddlewares = require('./middlewares/deleteMiddlewares').validateDelete;
const putMiddleware = require('./middlewares/putMiddlewares').validatePut;
const dataMiddleware = require('./middlewares/dataMiddleware')

router.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT","DELETE"],
    credentials: true
}));



// * Users Routes 
router.get('/', (req,res) => res.send('# Alltomatic API - Welcome, the API is in work! #'));
router.get('/Users', usersControllers.getUsers);
router.post('/Users', postMiddlewares, usersControllers.createUser);
router.delete('/Users/:id', deleteMiddlewares, usersControllers.deleteUser);
router.put('/Users/', putMiddleware, usersControllers.updateUser);
router.post('/auth/User', loginMiddleware ,usersControllers.authUser);


// * Data Routes
// * GET ALL DATAS FROM THE SENSORS
router.get('/sensor/data/umidade', dataControllers.getUmidade);
router.get('/sensor/data/temperatura', dataControllers.getTemperatura);
router.get('/sensor/data/luminosidade', dataControllers.getLuminosidade);

// GET SPECIFIC DATA FROM A SENSOR
router.post('/sensor/data/umidade', dataControllers.selectUmidade);
router.post('/sensor/data/temperatura', dataControllers.selectTemperatura);
router.post('/sensor/data/luminosidade', dataControllers.selectLuminosidade);

router.post('/sensor/data/day/temperatura', dataMiddleware, dataControllers.TempByDay);
router.post('/sensor/data/day/luminosidade', dataMiddleware, dataControllers.LumiByDay);
router.post('/sensor/data/day/umidade', dataMiddleware, dataControllers.UmiByDay);

module.exports = router;
