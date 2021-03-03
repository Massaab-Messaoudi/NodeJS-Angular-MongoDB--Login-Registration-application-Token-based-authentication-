const express =require('express')
const router = express.Router()
const EmployeeController =require('../Controllers/EmployeeController')
router.get('/',EmployeeController.index)
router.get('/show',EmployeeController.show)
router.post('/update',EmployeeController.update)
router.post('/store',EmployeeController.store)
module.exports = router