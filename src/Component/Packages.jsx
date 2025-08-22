import { data } from "../Data/data.js"
import styled from "styled-components"
import { IoMdStar } from "react-icons/io";

const MainContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
margin:2% auto;
align-items:center;
`

const Container = styled.div`
width:100%;
height:100vh;
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
`

const PackImage = styled.img`
// position:relative;
height:16rem;
width:100%;
object-fit:cover;
border-radius:15px 15px 0 0;
`
const LocationDetails = styled.div`
position:absolute;
left:50%;
transform:translateX(-50%);
display:flex;
flex-direction:column;
align-items:center;
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
            <h4>Awesome packages</h4>
            <h1>Rajasthan tour packages</h1>
            <Container>
                {data.map((element, index) => (
                    <Card key={index}>
                        <PackImage src={element.image} alt={element.title} />
                        <LocationDetails>
                            <Price>₹ {element.price}.PP</Price>
                            <Location>
                                <p>{element.location}</p>
                                <p>{element.days}</p>
                                <p>{element.persons}</p>
                            </Location>
                        </LocationDetails>
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