import { data } from "../Data/data.js"
import styled from "styled-components"

const MainContainer = styled.div`
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
gap:1.4rem;
`

const Card = styled.div`
height:30rem;
flex:0 0 28%;
border:1px solid black;
`

const PackImage = styled.img`
position:relative;
height:60%;
width:100%;
object-fit:cover;
`

export const Packages = () => {
    return (
        <MainContainer>
            <h1>Awesome packages</h1>
            <Container>
                {data.map((element, index) => (
                    <Card key={index}>
                        <PackImage src={element.image} alt="" />
                        <h5>{element.title}</h5></Card>
                ))}
            </Container>
        </MainContainer>
    )
}