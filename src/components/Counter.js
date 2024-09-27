'use client';

import React, {useState} from "react";
import PropTypes from "prop-types";

export default function Counter({ initialCount }) {
  const [counterValue, setCounterValue] = useState( initialCount);

  const updateCounterValue = (method) => {
    if(method === 'add'){
      setCounterValue((prevState) => prevState + 1);
    }
    if(method === 'sub'){
      setCounterValue((prevState) => prevState - 1);
    }
  }

  return (
    <div>
    <h2>Counter</h2>
      <h4>{counterValue}</h4>
      <button type="button" onClick={() => updateCounterValue('add')}>ADD</button>
      <button type='button' onClick={() => updateCounterValue('sub')}>SUBTRACT</button>
    </div>   
  )
}

Counter.propTypes = {
  initialCount: PropTypes.number.isRequired,
}
