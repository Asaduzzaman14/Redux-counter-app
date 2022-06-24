import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CounterDecremant, CounterIncremant, CounterReset } from '../Services/Action/CounterAction';


const Countret = () => {

    const count = useSelector((store) => store.count)
    console.log(count);
    const dispatch = useDispatch()

    const handelIncrement = () => {
        dispatch(CounterIncremant())
    }

    const handelDecrement = () => {
        dispatch(CounterDecremant())
    }

    const Reset = () => {
        dispatch(CounterReset())
    }

    return (
        <div>

            <h2>Count: {count}</h2>

            <button className='button' onClick={handelIncrement}>INCREMENT</button>
            <button className='button' onClick={handelDecrement}>INCREMENT</button>
            <button className='button' onClick={Reset}>Reset</button>
        </div>
    );
};


export default Countret;


// constant
// action
//reducer
// store 
