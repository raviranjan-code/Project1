import { CreateAccount } from "../../Pages/Auth/CreateAccount"
import { StudentRegistration } from "../../Pages/Auth/StudentRegistration"
import { Footer } from "../Footer/Footer"
import { Navbar } from "../Header/Navbar"

export const StdRegWrapper=()=>{
    return(
        <>
        <Navbar/>
        <CreateAccount/>
        <StudentRegistration/>
        <Footer/>
        </>
    )
}