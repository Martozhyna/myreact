import {useReducer} from "react";

import './App.css';

const init = (value) => {
return{counter1:value, counter2: value}
};

const reduser = (state,action) => {
  switch (action.type) {
    case 'INC1':
      return {...state, counter1: state.counter1 + 1}
    case 'DEC1':
      return {...state, counter1: state.counter1 - 1}
    case 'RES1':
      return {...state, counter1: 0}
    case 'SET1':
      return {...state, counter1: action.payload}
    case 'INC2':
      return {...state, counter2: state.counter2 + 1}
    case 'DEC2':
      return {...state, counter2: state.counter2 - 1}
    case 'RES2':
      return {...state, counter2: 0}
    case 'SET2':
      return {...state, counter2: action.payload}

  }
  return {...state};
};


function App() {

  const [state,dispatch]= useReducer(reduser,0,init);


  return (
      <div className="App">
        <h1>counter1: {state.counter1}</h1>
        <button onClick={() => dispatch({type:'INC1'})}>inc</button>
        <button onClick={() => dispatch({type:'DEC1'})}>dec</button>
        <button onClick={() => dispatch({type:'RES1'})}>reset</button>
        <button onClick={() => dispatch({type:'SET1',payload:2000})}>set</button>
        <hr/>
        <h1>counter2: {state.counter2}</h1>
        <button onClick={() => dispatch({type:'INC2'})}>inc</button>
        <button onClick={() => dispatch({type:'DEC2'})}>dec</button>
        <button onClick={() => dispatch({type:'RES2'})}>reset</button>
        <button onClick={() => dispatch({type:'SET2',payload:10000})}>set</button>
      </div>
  );
}

export default App;
