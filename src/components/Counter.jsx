import React, { useEffect, useReducer, useRef } from 'react'

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state > 0 ? state - 1 : state;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};


export default function Counter() {
    const [count,dispatch] = useReducer(reducer, initialState);
  return (
    <>
        <h1 className="">Practice React Hooks - useReducer</h1>
        <h3>Count - {count}</h3>
        <button type='button' onClick={()=> {
          dispatch('increment');
        }}>Increment</button>
        <button type='button' onClick={()=> {
          dispatch('decrement')
        }}>Decrement</button>
        <button type='button' onClick={()=> {
          dispatch('reset')
        }}>React</button>
    </>
  )
}
