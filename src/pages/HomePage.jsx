import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Video from '../components/Video'
import '../styles/homepage.css'
const HomePage = () => {
  // const {user} = useSelector((state)=>state.user)

  return (
    <>
      <Navbar />
      <div className="homepageSection">
        <div className="videosSection">
          {
            Array(12).fill(1).map(() => {
              return <Video />
            })
          }
        </div>
      </div>

    </>
  )
}

export default HomePage