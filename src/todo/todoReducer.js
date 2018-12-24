import {
    strictEqual
} from "assert";

const INITIAL_STATE = {
    description: '',
    list: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state,
                description: action.payload
            }
        case 'TODO_SEARCHED':
            return { ...state,
                list: action.payload
            }
        case 'TODO_CLEAR':
            return { ...state,
                description: ''
            }
        // case 'TODO_ADDED':
        // case 'TODO_MARKED_AS_DONE':
        // case 'TODO_MARKED_AS_PENDING':
        // case 'TODO_REMOVE':
        //     break;
        default:
            return state;
    }
}