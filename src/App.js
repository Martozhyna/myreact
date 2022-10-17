import {useReducer, useRef} from "react";

import './App.css';


const reducer = (state,action) => {
switch (action.type){
  case 'AddCat':
    return {
      ...state, cats: [...state.cats, {name:action.payload, id:Date.now()}]
    };
    case 'DeleteCat':
        return {
            ...state, cats: state.cats.filter(cat => cat.id !== action.payload)
        };
    case 'AddDog':
        return {
            ...state, dogs: [...state.dogs, {name: action.payload, id: Date.now()}]
        };
    case 'DeleteDog':
        return {
            ...state, dogs: state.dogs.filter(dog => dog.id !== action.payload)
        };
}}

function App() {



  let [state, dispatch] = useReducer(reducer, {cats: [], dogs: []})
  console.log(state.cats);
  console.log(state.dogs);

    let inputCat = useRef();
    let inputDog = useRef();

    return (
        <div className="App">
            <div className={'cats'}>
                Cats: <input type="text" ref={inputCat}/>
                <button onClick={() => dispatch({type: 'AddCat', payload: inputCat.current.value})}>Save</button>
            </div>
            <div className={'cat'}>
                {state.cats.map(value => <div key={value.id}>
                    Name: {value.name}
                    <button onClick={() => dispatch({type: 'DeleteCat', payload: value.id})}>Delete</button>
                </div>)}
            </div>
            <div className={'dogs'}>
                Dogs: <input type="text" ref={inputDog}/>
                <button onClick={() => dispatch({type: 'AddDog', payload: inputDog.current.value})}>Save</button>
            </div>
            <div className={'dog'}>
                {
                    state.dogs.map(value => <div key={value.id}>
                        Name: {value.name}
                        <button onClick={()=>dispatch({type: 'DeleteDog',payload: value.id})}>Delete</button>
                    </div>)
                }
            </div>
        </div>
    );
}

export default App;
