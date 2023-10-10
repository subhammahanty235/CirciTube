import React from 'react'
import {useSelector} from 'react-redux'
import Navbar from '../components/Navbar'
const HomePage = () => {
  const {user} = useSelector((state)=>state.user)

  return (
    <>
    <Navbar/>
    </>
  )
}

export default HomePage