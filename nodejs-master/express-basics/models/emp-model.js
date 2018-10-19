const mongoose = require('mongoose');

const EmpSchema = {
    empNo: String,
    firstName: String,
    lastName: String,
    city: String
}

const Employee = mongoose.model('Employee', EmpSchema)

module.exports = Employee;