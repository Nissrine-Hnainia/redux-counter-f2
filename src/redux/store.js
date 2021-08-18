//import createStore method
import {createStore} from "redux"
//import reducer
import counterReducer from "./reducers/counterReducer"


//create the store with creatStore method and pass reducer as argument
const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store