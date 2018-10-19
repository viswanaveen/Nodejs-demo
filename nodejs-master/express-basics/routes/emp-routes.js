const express = require('express')

const empController = require('../controllers/emp-controller')

const empRouter = express.Router()


empRouter.get('/', empController.getEmployees)

empRouter.get('/:id', empController.getEmployeeById)


empRouter.post('/', empController.createEmployee)

empRouter.delete('/:id', empController.deleteEmployee)

empRouter.put('/:id', empController.updateEmployee)

module.exports = empRouter;

