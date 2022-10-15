import {useReducer} from "react";

import {DEC, INC, RES, SET} from "./count.actions";


const reducer = (state,action) => {
  switch (action.type) {
      case INC:
          return {...state, count1: state.count1 + 1}
      case DEC:
          return {...state, count1: state.count1 - 1}
      case RES:
          return {...state, count1: 0}
      case SET:
          return {...state,count1: action.payload}

  }
}

const useCount1Reducer = () => useReducer(reducer,{count1:0})

export {
    useCount1Reducer
};