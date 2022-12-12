import './App.css';
import { useState } from "react";
import { connect, useDispatch } from 'react-redux';
import { addEmployee, deleteEmployee, changeEmployeePosition } from '../actions'
const uuid = require('uuid')

const App = (state) => {
  const [employeeName, setEmployeeName] = useState('');
  const [newName, setNewName] = useState('');
  const [employeePosition, setEmployeePosition] = useState('');

  const dispatch = useDispatch();

  const addNewEmployee = (e) => {
    e.preventDefault();
    const employee = {
      id: uuid.v4(),
      name: employeeName,
      position: employeePosition
    }
    
    dispatch(addEmployee(employee))
  }

  

  return (
    <div className="App">
      <div className="employeeForm">
        <form onSubmit={addNewEmployee}>
          <h2>Add new employee</h2>
          <label>Set employee name:</label>
          <input type="text"onChange={(e) => (setEmployeeName(e.target.value))}/>
          <label>Set employee position:</label>
          <input type="text" onChange={(e) => (setEmployeePosition(e.target.value))}/>
          <button type="submit">Add employee</button>
        </form>
      </div>
      <div className="emplyeesList">
        {state.employees.map((employee) => {
          return(
            <div key={employee.id} className="singleEmployee">
              <div className="employeeInformation">
                <h2>{employee.name}</h2>
                <p>{employee.position}</p>
              </div>
              <div className="changeEmployeeInformation">
                  <label>Change employee position:</label>
                  <input type="text" onChange={(e) => (setNewName(e.target.value))}/>
                  <button onClick={(e) => (dispatch(changeEmployeePosition(employee, newName)))}>Change employee name</button>
              </div>
              <button onClick={(e) => (dispatch(deleteEmployee(employee)))}>Delete employee</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    employees: state.employees
  }
}

export default connect(mapStateToProps)(App)
