import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";

const AllRoutes = () =>{
    return (
        <>
        <Routes>
            <Route exact path="/login" element={<Login/>}/>
            <Route path="/" element={<HomePage/>}/>
        </Routes>
        </>
    )
}

export default AllRoutes ;