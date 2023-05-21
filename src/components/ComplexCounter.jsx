import React, { useEffect, useReducer, useRef } from 'react'

const initialState = {
    counter: 0,
    counter1:5,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, counter: state.counter + action.value};
    case 'decrement':
      return {...state, counter: state.counter > 0 ? state.counter - action.value : state.counter};
    case 'reset':
      return {...state,counter: 0};
    case 'increment1':
      return {...state, counter1: state.counter1 + action.value};
    case 'decrement1':
      return {...state, counter1: state.counter1 > 0 ? state.counter1 - action.value : state.counter1};
    case 'reset1':
    {
        return {counter1: state.counter1};
    }
    default:
      return state;
  }
};
export default function ComplexCounter() {

    const [count,dispatch] = useReducer(reducer, initialState);
  return (
    <>
        <h1 className="">Practice React Hooks - useReducer</h1>
        <h3>Count - {count.counter}</h3>
        <button type='button' onClick={()=> {
          dispatch({
                type: 'increment',
                value: 1,
          });
        }}>Increment by 1</button>
        <button type='button' onClick={()=> {
          dispatch({
                type: 'decrement',
                value: 1,
          })
        }}>Decrement by 1</button>
        <button type='button' onClick={()=> {
          dispatch({
                type: 'reset',
          })
        }}>React In 1</button>
        <hr/>
        <h1 className="">Practice React Hooks - useReducer</h1>
        <h3>Count - {count.counter1}</h3>
        <button type='button' onClick={()=> {
          dispatch({
                type: 'increment1',
                value: 5,
          });
        }}>Increment by 5</button>
        <button type='button' onClick={()=> {
          dispatch({
                type: 'decrement1',
                value: 5,
          })
        }}>Decrement by 5</button>
        <button type='button' onClick={()=> {
          dispatch({
                type: 'reset1',
          })
        }}>React In 5</button>
    </>
  )
}
