import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
        return state + action.data;
        case 'DECREMENT':
        return state - action.data;
        case 'INIT to 0':
        return 0;
        default:
        return state;
    }
}
function TestComp() {
    const [count, dispatch] = useReducer(reducer, 0);
    return (
        <div>
        <h1>Counter: {count}</h1>
        <button onClick={()=>dispatch({type:"INCREMENT", data: 1})}>Increment</button>
        <button onClick={()=>dispatch({type:"DECREMENT", data: 1})}>Decrement</button>
        <button onClick={()=>dispatch({type:"INIT to 0", data: 1})}>init 0</button>
        </div>
    );
}

export default TestComp;