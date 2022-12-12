export const addEmployee = employee => {
    return {
        type: 'ADD_EMPLOYEE',
        payload: employee
    }
}

export const deleteEmployee = employee => {
    return {
        type: 'DELETE_EMPLOYEE',
        payload: employee
    }
}

export const changeEmployeePosition = (employee, newPosition) => {
    return {
        type: 'CHANGE_EMPLOYEE_POSITION',
        payload: {
            employee: employee,
            newPosition: newPosition
        }
    }
}