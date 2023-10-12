import React from 'react'
import '../styles/video.css'
import ViewsIcon from '../assets/icons/view-svgrepo-com.svg'
import LoveIcon from '../assets/icons/love-svgrepo-com.svg'
const Video = () => {
  return (
    <div className="videobox">
      <div className="thumbnail">
        <img className='thumnailImg' src="https://www.thoughtco.com/thmb/HKtQOtFbj_0hU6g3hNbq0TeSRXs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/461695431-58b9d5ed3df78c353c3af489.jpg" alt="" />
        <span className="duration">12 min</span>
      </div>

      <div className="videoDetails">
        <div className="likes-views">
          <div className='views'>
            <img className='icon-view' src={ViewsIcon} alt="" />
            <p>12k</p>
          </div>
          {/* <p>12k views</p> */}
          <div className='likes'>
            <img className='icon-view' src={LoveIcon} alt="" />
            <p>2k</p>
          </div>

        </div>
        <p className="subject">Mamata Banerjee hardcore ass Fuck</p>

      </div>
    </div>
  )
}

export default Video