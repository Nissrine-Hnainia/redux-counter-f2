import {INCREMENT, DECREMENT} from "../actions/actionsTypes"

const intialState = {
    count: 0,
}

//pure function: it depends only on its input values
const counterReducer = (state=intialState, {type} ) => {
    switch (type) {
        case INCREMENT:
            return {...state, count: state.count+1}
        case DECREMENT:
            return {...state, count: state.count > 0 ? state.count-1 : state.count }  
        default:
        return state
    }
} 
//single source of truth

export default counterReducer