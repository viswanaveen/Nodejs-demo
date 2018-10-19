import React, { Component } from 'react';
import './App.css';
import EmpList from './employees/EmpList';

export class App extends Component {
  render() {
    return (
      <div>
        <h1> React  demo </h1>
        <div>Simple ERP Demo</div>

        <EmpList />
      </div>
      
    );
  }
}

export class Dummy {

}
