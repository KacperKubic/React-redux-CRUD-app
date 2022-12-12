import { combineReducers } from "redux";

const alterEmployees = (state = [], action) => {
    if(action.type === 'ADD_EMPLOYEE'){
        return [...state, action.payload]
    }else if(action.type === 'DELETE_EMPLOYEE'){
        return state.filter((state) => state.id !== action.payload.id)
    }else if(action.type === 'CHANGE_EMPLOYEE_POSITION'){
        const newState = []; 
        
        for(let i = 0; i < state.length; i++){
            if(state[i].id === action.payload.employee.id){
                state[i] = {
                    id: state[i].id,
                    name: state[i].name,
                    position: action.payload.newPosition
                }
            }
            newState.push(state[i])
        }

        return newState;

    }

    return state;
}

export default combineReducers({
    employees: alterEmployees
})