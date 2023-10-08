import axios from "axios";
import { userReducer } from "../reducers/userReducer";
const url = "http://localhost:5000"
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