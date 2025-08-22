import { Header } from "../Component/Header"
import { Footer } from "../Component/Footer"
import { Packages } from "../Component/Packages"
import { Testimonial } from "../Component/Testimonial"

export const LandingPage = () => {
    return (
        <>
            <Header />
            <Packages />
            <Testimonial />
            <Footer />
        </>
    )
}