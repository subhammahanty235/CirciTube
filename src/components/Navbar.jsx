import React from 'react'
import '../styles/navbar.css'
import DownArrowIcon from '../assets/icons/down-arrow-svgrepo-com.svg'
import SearchIcon from '../assets/icons/search-svgrepo-com.svg'
import { useSelector } from 'react-redux'
const Navbar = () => {
    const { user ,authenticatedUser } = useSelector((state) => state.user)

    return (
        <nav>
            <div className="logo">LoGo</div>
            <div className="searchbar">
                <img src={SearchIcon} alt="" className='searchIcon' />
                <input type="text" />
            </div>
            <div className="menus">
                {
                    authenticatedUser === false?
                        <button className="loginbtn">Login</button> :
                        <div className="loggedInMenus">
                            <div className="profile"> 
                                <h4 className="username">{user.name.split(' ')[0]}</h4>
                                <img src={user?.profilePic} alt="" className="profilePic" />

                            </div>
                            <img src={DownArrowIcon} alt="" className="dropDown" />
                        </div>

                }
            </div>
        </nav>
    )
}

export default Navbar