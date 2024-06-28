import React from 'react'
import { useRouteError } from 'react-router-dom';

function RoutingError() {
    let err=useRouteError()
  return (
    <div className="text-center text-danger fs-3 m-auto">
    Invalid Path
    <p className='text-center text-info fs-4 m-auto'>{err.data}</p>
    <p className='text-center text-info fs-4 m-auto'>{err.status}={err.statusText}</p>
    </div>
  )
}

export default RoutingError;