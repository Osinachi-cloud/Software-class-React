import React, { useState } from 'react'

export const Counter = () => {

    const [count, setCount] = useState(0);

    const addOne = () =>{
        setCount(count + 1);
    }

    const subTractOne = () =>{
        setCount(count - 1);
    }

  return (
    <>
        <button onClick={subTractOne}>Subtract one</button>
        {count}
        <button onClick={addOne}>Add One</button>
    </>
  )
}
