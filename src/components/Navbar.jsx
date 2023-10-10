import React from 'react'
import '../styles/navbar.css'
import DownArrowIcon from '../assets/icons/down-arrow-svgrepo-com.svg'
import SearchIcon from '../assets/icons/search-svgrepo-com.svg'
const Navbar = () => {
  return (
    <nav>
        <div className="logo">LoGo</div>
        <div className="searchbar">
            <img src={SearchIcon} alt="" className='searchIcon'/>
            <input type="text" />
        </div>
        <div className="menus">
            <button className="loginbtn">Login</button>
            <div className="loggedInMenus">
                <img src="https://lh3.googleusercontent.com/a/ACg8ocJhQGbw3iuf5B0LgW4ydvNzdsG0XehnyLO0IgnFW5I5=s96-c" alt="" className="profilePic" />
                <img src={DownArrowIcon} alt="" className="dropDown" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar