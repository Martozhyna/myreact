import {DEC, INC, RES, SET, useCount1Reducer} from "../../reducers";

function Count1 () {
    const [state, dispatch] = useCount1Reducer();
    return (
        <div>
            <h1>Count1: {state.count1}</h1>
            <button onClick={() => dispatch({type:INC})}>inc</button>
            <button onClick={() => dispatch({type:DEC})}>dec</button>
            <button onClick={() => dispatch({type:RES})}>res</button>
            <button onClick={() => dispatch({type:SET,payload:87})}>set</button>
        </div>
    )
}
export {Count1}