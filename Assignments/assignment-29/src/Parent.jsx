import React, { useState } from 'react'
import Child from './Child';
import './Parent.css'

function Parent() {

    let [counter, setCounter]=useState(0)

    function changeIncre(){
        setCounter(counter+1);
    }
    function changeDecre(){
        setCounter(counter-1);
    }

  return (
    <div className="container">
        <div className="parent text-center text-primary">
            <h3>Parent</h3>
        </div>
        <div className="card text-center">
            <h5>Count = {counter}</h5>
        </div>
        <Child count={{counter, changeIncre, changeDecre}} />
    </div>
  )
}

export default Parent;