import { Footer } from "../Footer/Footer"
import { Navbar } from "../Header/Navbar"
import { FeatureSection } from "../Main/FeatureSection"
import { Home } from "../Main/Home"
import { TextSection } from "../Main/TextSection"

export const HomeWrapper=()=>{
    return(
        <>
        <Navbar/>
        <TextSection/>
        <FeatureSection/>
        <Home/>
        <Footer/>
        </>
    )
}