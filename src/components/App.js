import { useState } from "react";
import { connect, useDispatch } from 'react-redux';
import { addEmployee } from '../actions'

function App() {
  const [employeeName, setEmployeeName] = useState('');
  const [employeePosition, setEmployeePosition] = useState('');

  const dispatch = useDispatch();

  const addEmployee = (e) => {
    e.preventDefault();
    const employee = {
      name: employeeName,
      position: employeePosition
    }
    dispatch(addEmployee(employee))
  }

  

  return (
    <div className="App">
      <div className="employeeForm">
        <form onSubmit={addEmployee}>
          <h2>Add new employee</h2>
          <p>Set employee name:</p>
          <input type="text "onChange={(e) => (setEmployeeName(e.target.value))}/>
          <p>Set employee position:</p>
          <input type="text" onChange={(e) => (setEmployeePosition(e.target.value))}/>
          <button type="submit">Add employee</button>
        </form>
      </div>
      <div className="emplyeesList">
        {renderedList}
      </div>
    </div>
  );
}

export default App;
