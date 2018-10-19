import React, { Component } from 'react'

import axios from 'axios';

class EmpList extends Component {

    constructor() {
        super()
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/employees')
            .then(res => {
                console.log(res.data)
                this.setState({ employees: res.data })
            }).catch(err => {

            })
    }


    render() {
        return (
            <div>                
                <h3>List of Employees</h3>
                <ul>
                    { this.state.employees.map(e => <li key={e._id}>{e.firstName}</li>) }
                </ul>
            </div>
        )
    }
}

export default EmpList