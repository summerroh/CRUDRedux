// actionCreator
import * as actionTypes from './actionTypes'

//같은건데 arrow 형식
// export const bugAdded = description => ({
//         type: actions.BUG_ADDED,
//         payload: {
//           description: description
//         }
// })

//같은건데 function 형식
export function bugAdded(description) {
    return {
        type: actionTypes.BUG_ADDED,
        payload: {
          description: description
        }
    }
}

export function bugRemoved(id) {
    return {
        type: actionTypes.BUG_REMOVED,
        payload: {
          id: id
        }
    }
}

export function bugResolved(id) {
    return {
        type: actionTypes.BUG_RESOLVED,
        payload: {
          id: id,
        }
    }
}