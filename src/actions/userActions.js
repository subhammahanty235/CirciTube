import axios from "axios";
const url = "http://localhost:5000"
const token = localStorage.getItem("authToken")
export const googleLogin = (data) => async (dispatch) => {
    try {
        dispatch({ type: "REQUEST_LOGIN_WITH_GOOGLE" })
        const response = await axios.post(`${url}/api/user/login`,
            {
                name:data.name,
                email:data.email,
                profilePic:data.profilePic
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )

        if (response.data.success === true) {
            console.log(response);
            dispatch({
                type: "REQUEST_LOGIN_WITH_GOOGLE_SUCCESS",
                payload: response.data
            })
        }



    } catch (error) {
        dispatch({
            type: "REQUEST_LOGIN_WITH_GOOGLE_FAILED",
            payload: error.response,
        })
    }
}

export const getUserData = ()=> async (dispatch) => {
    try {
        dispatch({type:"FETCH_USER_DATA"});
        console.log(token)
        const response = await axios.get(`${url}/api/user/get`,
        {
            headers: {
                "Content-Type": "application/json",
                "token":token
            },
        }
        )

        if(response.data.success === true){
            dispatch({
                type:"FETCH_USER_DATA_SUCCESS",
                payload:response.data
            })
        }else{
            dispatch({
                type: "FETCH_USER_DATA_FAILED",
                payload: response.data,
            })
        }

    } catch (error) {
        dispatch({
            type: "FETCH_USER_DATA_FAILED",
            payload: error.response,
        })
    }
}