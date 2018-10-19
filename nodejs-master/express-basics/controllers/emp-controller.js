const Employee = require('../models/emp-model')

function getEmployees(req, res) {
    Employee.find({}).then((data) => {
        res.send(data)
    }).catch((err) => {
        res.status(404).send('Couldnt fetch Employees' + err)
    })
}

function getEmployeeById(req, res) {
    const empId = req.params.id
    console.log('Emp Id : ', empId)
    Employee.findById(empId)
            .then(emp => res.send(emp))
            .catch(err => {
                res.status(404).send('Employee Not Found')
            })
}

function createEmployee(req, res) {
    
    const empData = req.body
    const empObj = new Employee(empData)
    
    empObj.save().then(emp => {
        res.status(201).send(emp)
    }).catch(err => {
        res.status(500).send('Internal Error: Couldnt cretae employee')
    })
}

function updateEmployee(req, res) {
    res.send('Update Employee') 
}

function deleteEmployee(req, res) {
    res.send('Delete Employee') 
}

module.exports = {
    getEmployees,
    getEmployeeById,

    createEmployee,
    updateEmployee,
    deleteEmployee
}