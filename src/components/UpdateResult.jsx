import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function UpdateResult() {
    const {id}=useParams();

  return (
    <div>{id}</div>
  )
}

export default UpdateResult