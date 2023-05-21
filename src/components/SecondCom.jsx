import React, { useContext } from 'react'
import { CountContext } from '../App';

export default function SecondCom() {

    const {count, setCount} = useContext(CountContext);

  return (
    <div>SecondCom === {count}
    <button onClick={() => setCount(count + 1)}>+</button>
    <button onClick={() => setCount(0)}>
      Reset
    </button>
    </div>
  )
}
