import styled from "styled-components"
import { FaWhatsapp } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaHouseChimney } from "react-icons/fa6";
import { SlEnvolope } from "react-icons/sl";
import { FaPhone } from "react-icons/fa";

const Container = styled.div`
background-color:#14141F;
display:flex;
flex-direction:row;
justify-content:space-evenly;
padding:5%;
color:white;
`
const Info = styled.div`
width:32%;
display:flex;
flex-direction:column;
`
const Heading = styled.h1`
font-size:1.6rem;
text-transform:capitalize;
margin:0;
`
const H4 = styled.h4`
display:flex:
align-items:center;
margin:.7rem 0;
font-family:"Jost", sans-serif;
font-weight:400;
font-size:0.9rem;
`
export const Footer = () => {
    return (
        <Container>
            <div>
                <a href="https://wa.me/917303473668?text=Hello%20I%20am%20interested%20in%20your%20service" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp color="#0cd60cff" style={{ fontSize: "2.3rem" }} />
                </a>
            </div>
            <Info>
                <Heading>get in touch</Heading>
                <H4><FaHouseChimney style={{ paddingRight: ".7rem" }} />9 First Floor Main Rajapuri Road Opposite Sector 5 Uttam Nagar, Dwarka New Delhi 110059</H4>
                <H4><SlEnvolope style={{ paddingRight: ".7rem" }} /> info@prebookholidays.com </H4>
                <H4><FaPhone style={{ paddingRight: ".7rem" }} /> +91-8377924630</H4>
            </Info>
            <div>
                <a href="tel:+917303473668">
                    <PiPhoneCallFill color="#0b860bff" />
                </a>
            </div>
        </Container >
    )
}