// []
import * as actions from './actionTypes'

let lastId = 0;

export default function reducer ( state = [], action ) {
    // switch 형식으로 구성한것
    switch (action.type) {
        case actions.BUG_ADDED:
            return [ 
                ...state, 
                {id: ++lastId, 
                description: action.payload.description, 
                resolved: false}
            ];
        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id);

        case actions.BUG_RESOLVED:
            // return state.map(bug => bug.id == action.payload.id ? bug.resolved = action.payload.resloved : bug);

            return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved: true})
        default:
            return state;
    }


    // 같은 내용을 if else 형식으로 구현한것
    // if ( action.type === "bugAdded" ) 
    //     return [ 
    //         ...state, 
    //         {id: ++lastId, 
    //         description: action.payload.description, 
    //         resolved: false}
    //     ];
    
    // else if ( action.type === "bugRemoved") 
    //     return state.filter(bug => bug.id !== action.payload.id);

    // return state;
}
