import React, { useState } from 'react'
import {decCount, incCount} from './Redux/actions'
import {useDispatch, useSelector} from 'react-redux'
const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state)=>state.count)
    // const [count,setCount]= useState(0)
    const add = (payload) => {
        dispatch(incCount(payload))
       
    }
    const dec = (payload) => {
        dispatch(decCount(payload))
       
    }
  return (
    <div>
        <h1>Counter</h1>
        <p>{count}</p>
        <button onClick={() =>dec(1)}>-</button>
        <button onClick={()=>add(1)}>+</button>
    </div>
  )
}

export default Counter