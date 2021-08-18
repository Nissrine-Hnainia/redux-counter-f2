import {INCREMENT, DECREMENT} from "./actionsTypes"
// const increment = {
//     type: 'supprimer-todo',
//     payload: 548796 
// } ==> action

export const increment = () => {
    return {
        type: INCREMENT
    }
}
//action creator: function that returns an object

export const decrement = () => {
    return {
        type: DECREMENT
    }
}