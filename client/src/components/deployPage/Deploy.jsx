import React, { useEffect } from 'react'

const Deploy = ({deploy}) => {
  useEffect(() => {
    deploy();
  }, [])
  
  return (
    <div>Deploy</div>
  )
}

export default Deploy