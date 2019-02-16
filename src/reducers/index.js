import {SET_FOCUS_ID} from '../actions';

const initialState = {
    works: [
        {
            id: 0,
            title: 'Moby Dick',
            reviews: [{
                    text: 'very bad, only one whale',
                    score: 1
                },
                {
                    text: 'Good book, not too many whales',
                    score: 5
                }
            ]
        },
        {
            id: 1,
            title: 'Kid A',
            reviews: [{
                text: 'Garbage',
                score: 2
            },
            {
                text: 'the greatest album of our time',
                score: 5
            }
        ]
        }
    ],
    focusId: ''
}

export const cretaMidicReducer = (state=initialState, action) => {
    if(action.type === SET_FOCUS_ID) {
        return Object.assign({}, state, {
            focusId: action.focusId
        })
    }
    return state
}