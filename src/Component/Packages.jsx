import { data } from "../Data/data.js"
import styled from "styled-components"
import "./Style/Package.css"
import { IoMdStar } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { GoPersonFill } from "react-icons/go";

const MainContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
margin:2% auto;
align-items:center;
`

const Container = styled.div`
width:100%;
height:max-content;
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
gap:1rem;
`

const Card = styled.div`
position:relative;
height:32rem;
flex:0 0 28%;
border-radius:15px;
background-color:#f2f2f2;
display:flex;
flex-direction:column;
justify-content:space-between;
margin-bottom:2rem;
`
const ImageWrapper = styled.div`
  position: relative;
  height: 16rem;
  width: 100%;
  overflow: hidden;
  border-radius: 15px 15px 0 0;

  
  &:hover img {
    transform: scale(1.4);
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0%;
    height: 0%;
    transform:translate(-50%,-50%);
    background: #757575; /* grey overlay with transparency */
    z-index: 1;
    opacity: 0;
    transition: 0.7s;
  }

  &:hover::before{
  opacity:.5;
  top:0%;
  left:0%;
  height:100%;
  width:100%;
  transform:translate(0,0);
//   background-color:rgba(19, 53, 123, 0.5);
  }
`
const PackImage = styled.img`
height:16rem;
width:100%;
object-fit:cover;
border-radius:15px 15px 0 0;
transition:all .7s ease-in-out;
`
const LocationDetails = styled.div`
position:absolute;
width:100%;
left:50%;
transform:translateX(-50%);
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
z-index:5;
`
const Price = styled.button`
font-size:1rem;
text-transform:capitalize;
font-weight:bold;
border-radius:0 0 15px 15px;
border:none;
background-color:#13357b;
color:white;
padding:.8rem;
`

const Location = styled.div`
z-index:23;
position:absolute;
top:42%;
width:100%;
display:flex;
justify-content:space-evenly;
background-color:rgba(35,34,34,0.6);
border:1px solid white;
`
const LocationP = styled.button`
padding:.7rem;
font-size:0.8rem;
font-family:"Roboto", sans-serif;
font-weight:300;
text-transform:capitalize;
color:white;
background-color:transparent;
border:none;

&:nth-child(2){
border:1px solid white;
}
`
const CardDetails = styled.div`
padding:0 .7rem;
`
const H1 = styled.h1`
    color:#14141f;
    font-size:1.25rem;
    text-transform:capitalize;
    font-family: "Jost", sans-serif;
    line-height:1.2;
    font-weight:500;
    margin-bottom:.4rem;
`
const H5 = styled.h5`
margin:0;
color:#757575;
font-size:.8rem;
font-family:"Roboto", sans-serif;
font-weight:400;
text-transform:uppercase;
margin-bottom:.4rem;
`
const H4 = styled.h4`
// margin-top:.rem;
color:#585858;
font-size:.9rem;
font-weight:500;
font-family:"Roboto", sans-serif;
text-transform:capitalize;
margin:0.4rem 0;
`
const Span = styled.span`
font-family:"Roboto", sans-serif;
font-weight:400;
font-size:.8rem;
color:#757575;
text-transform: capitalize;
`
const Button = styled.button`
width:100%;
margin-top:1.4rem;
font-size:1rem;
text-transform:capitalize;
font-weight:bold;
border-radius:0 0 15px 15px;
border:none;
background-color:#13357b;
color:white;
padding:.8rem;
cursor:pointer;
`
export const Packages = () => {
    return (
        <MainContainer>
            <div className="container">
                <hr />
                <h4 className="mainContainerHeading">Awesome packages</h4>
                <hr />
            </div>
            <h1 className="mainHeading">Rajasthan tour packages</h1>
            <Container>
                {data.map((element, index) => (
                    <Card key={index}>
                        <ImageWrapper>
                            <PackImage src={element.image} alt={element.title} />
                        </ImageWrapper>
                        <LocationDetails>
                            <Price>₹ {element.price}.PP</Price>
                        </LocationDetails>
                        <Location>
                            <LocationP><IoLocationOutline style={{ paddingRight: ".2rem" }} /> {element.location}</LocationP>
                            <LocationP><SlCalender style={{ paddingRight: ".2rem" }} /> {element.days} days</LocationP>
                            <LocationP><GoPersonFill style={{ paddingRight: ".2rem" }} /> {element.persons} person</LocationP>
                        </Location>
                        <CardDetails>
                            <H1>{element.title}</H1>
                            <H5>{element.subTitle}</H5>
                            {[...Array(element.stars)].map((item, index) => {
                                return <IoMdStar key={index} color="#feb743" />
                            })}
                            <H4>Duration: <Span>{element.duration}</Span> </H4>
                            <H4>Places Covered: <Span>{element.placesCovered}</Span> </H4>
                            <H4>starting destination: <Span>{element.duration}</Span> </H4>
                        </CardDetails>
                        <Button>enquiry now</Button>
                    </Card>
                ))}
            </Container>
        </MainContainer>
    )
}