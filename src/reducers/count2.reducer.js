import {useReducer} from "react";

import {DEC, INC, RES, SET} from "./count.actions";


const reducer = (state,action) => {
    switch (action.type) {
        case INC:
            return {...state, count2: state.count2 + 1}
        case DEC:
            return {...state, count2: state.count2 - 1}
        case RES:
            return {...state, count2: 0}
        case SET:
            return {...state,count2: action.payload}

    }
}

const useCount2Reducer = () => useReducer(reducer,{count2:0})

export {
    useCount2Reducer
};