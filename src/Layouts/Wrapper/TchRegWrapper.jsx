import { CreateAccount } from "../../Pages/Auth/CreateAccount"
import { TeacherRegistration } from "../../Pages/Auth/TeacherRegistration"
import { Footer } from "../Footer/Footer"
import { Navbar } from "../Header/Navbar"

export const TchRegWrapper=()=>{
    return(
        <>
        <Navbar/>
        <CreateAccount/>
        <TeacherRegistration/>
        <Footer/>
        </>
    )
}