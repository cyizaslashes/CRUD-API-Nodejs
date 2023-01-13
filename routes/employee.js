const express = require('express')
const  router = express.Router()

const EmployeeController = require ('../controllers/EmployeeController')

router.get('/',EmployeeController.index)
router.post('/show',EmployeeController.show)
router.post('/store',EmployeeController.store)
router.post('/update',EmployeeController.update)
router.post('/destroy',EmployeeController.destroy)

module.exports = router