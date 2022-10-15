import {DEC, INC, RES, SET, useCount2Reducer} from "../../reducers";

function Count2 () {
    const [state, dispatch] = useCount2Reducer();
    return (
        <div>
            <h1>Count2: {state.count2}</h1>
            <button onClick={() => dispatch({type:INC})}>inc</button>
            <button onClick={() => dispatch({type:DEC})}>dec</button>
            <button onClick={() => dispatch({type:RES})}>res</button>
            <button onClick={() => dispatch({type:SET,payload:33})}>set</button>
        </div>
    )
}
export {Count2}