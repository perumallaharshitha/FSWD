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
    <div className=" d-flex mt-10 align-content-center">
        <div className="con">
        <div className="parent text-center text-primary">
            <h3>Parent</h3>
        </div>
        <div className="cd text-center align-items-center">
            <h5>Count = {counter}</h5>
        </div>
        <Child count={{counter, changeIncre, changeDecre}} />
    </div>
    </div>
  )
}

export default Parent;