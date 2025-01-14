import { LogIn } from "../../Pages/Auth/LogIn"
import { LoginAccount } from "../../Pages/Auth/LoginAccount"
import { Footer } from "../Footer/Footer"
import { Navbar } from "../Header/Navbar"

export const LogInWrapper=()=>{
    return(
        <>
        <Navbar/>
        <LoginAccount/>
        <LogIn/>
        <Footer/>

        </>
    )
}