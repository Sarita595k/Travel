import "./Style/Package.css"
import styled from "styled-components"

const MainContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
margin:2% auto;
align-items:center;
`
export const Testimonial = () => {
    return (
        <MainContainer>
            <div className="container">
                <hr />
                <h4 className="mainContainerHeading">testimonial</h4>
                <hr />
            </div>
            <h1 className="mainHeading">our client say!!!</h1>
        </MainContainer>
    )
}