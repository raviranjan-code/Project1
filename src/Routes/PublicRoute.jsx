import { Route, Routes } from "react-router-dom"
import { HomeWrapper } from "../Layouts/Wrapper/HomeWrapper"
import { LogInWrapper } from "../Layouts/Wrapper/LogInWrapper"
import { StdRegWrapper } from "../Layouts/Wrapper/StdRegWrapper"
import { TchRegWrapper } from "../Layouts/Wrapper/TchRegWrapper"

export const PublicRoute=()=>{
    return(
        <>
        
        <Routes>
            <Route path="/" element={<HomeWrapper/>}/>
            <Route path="/login" element={<LogInWrapper/>}/>
            <Route path="/studentregistration" element={<StdRegWrapper/>}/>
            <Route path="/teacherregistration" element={<TchRegWrapper/>}/>
        </Routes>
        
        </>
    )
}