import React from 'react'
import {useSelector} from 'react-redux'
const HomePage = () => {
  const {user} = useSelector((state)=>state.user)

  return (
    <>
    
    <div>HomePage</div>
    <h2>{user.name}</h2>
    
    </>
  )
}

export default HomePage