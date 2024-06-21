import React from 'react'
import './AddUser.css'
import image from './assets/user.jpeg'

function AddUser(props) {
  return (
    <div className="cards">
        <div className="car">
          <img className="pic" src={image} alt="" />
          <h4 className="name text-center">MYRTIE MAY</h4>
          <h6 className="text-center text-secondary">Head of Global Products</h6>
          <a className="text-center mt-3" href="https://www.upwork.com/fl/kaicasey?mp_source=share">maymyrite.in</a>
          <button type='submit' className="btn btn-info text-center" onClick={props.count.changeCount}>Add Users</button>
        </div>
        <div className="car">
          <img className="pic" src={image} alt="" />
          <h4 className="name text-center">BLANCHE PEARSON</h4>
          <h6 className="text-center text-secondary">Sales Manager</h6>
          <a className="text-center mt-3" href="https://www.upwork.com/freelancers/otravers?mp_source=share">pearson T.</a>
          <button type='submit' className="btn btn-info text-center" onClick={props.count.changeCount}>Add Users</button>
        </div>
        <div className="car">
          <img className="pic" src={image} alt="" />
          <h4 className="name text-center">LAURA FRENCH</h4>
          <h6 className="text-center text-secondary">External Consulant</h6>
          <a className="text-center mt-3" href="https://www.upwork.com/freelancers/grigorijrichters?p=1280119853048913920">Laura R.</a>
          <button type='submit' className="btn btn-info text-center" onClick={props.count.changeCount}>Add Users</button>
        </div>
        <div className="car">
          <img className="pic" src={image} alt="" />
          <h4 className="name text-center">IIDIKO GASPAR</h4>
          <h6 className="text-center text-secondary">UI DESIGNER</h6>
          <a className="text-center mt-3" href="https://www.upwork.com/freelancers/~0181aba8672878180b">Gaspar G.</a>
          <button type='submit' className="btn btn-info text-center" onClick={props.count.changeCount}>Add Users</button>
        </div>
      </div>
  )
}

export default AddUser;