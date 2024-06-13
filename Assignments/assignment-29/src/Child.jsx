import React from 'react'
import './Child.css'

function Child(props) {
  return (
    <div>
      <div className="buttons">
        <button className="btn incre btn-success" onClick={props.count.changeIncre}>Increment</button>
        <button className="btn decre btn-success" onClick={props.count.changeDecre}>Decrement</button>
      </div>



      <div className="child text-center m-auto text-primary mt-3">
        <h3>Child</h3>
      </div>
    </div>

    
  )
}

export default Child;