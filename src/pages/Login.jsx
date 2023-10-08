import React, { useEffect } from 'react'
import { GoogleLogin } from "@react-oauth/google";
import '../styles/login.css'
import LoginImage from '../assets/images/loginImage.gif'
import { useDispatch  ,useSelector} from 'react-redux';
import jwt_decode from "jwt-decode";
import {googleLogin} from '../actions/userActions'
const Login = () => {
    const dispatch = useDispatch();
    const { authenticatedUser } = useSelector((state) => state.user);

    const onSuccess = (creds)=>{
        const data = jwt_decode(creds.credential);
        const jsonData = {
            name:data.name,
            email:data.email,
            profilePic:data.picture
        }
        console.log(jsonData)
        dispatch(googleLogin(jsonData))
    }

    const onError = (error) =>{
        window.alert(error)
    }

    useEffect(()=>{
        if(authenticatedUser=== true){
            window.location.replace("/")
        }
    },[authenticatedUser])

    return (

        <div>
            <div className="loginScreen">
                <div className="left_part">
                    <img src={LoginImage} alt="" />
                </div>
                <div className="right_part">
                    <h3>
                        Login / SignUp
                    </h3>
                    <GoogleLogin
                        onSuccess={onSuccess}
                        onError={onError}
                        text="Login With Google"
                        className="google_login_btn"
                        width={280}
                        scope="profile email"
                        logo_alignment="center"
                    />
                </div>
            </div>



        </div>
    )
}


export default Login

