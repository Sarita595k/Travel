import { useEffect, useState } from "react"
import styled from "styled-components"
import "./Style/Header.css"

import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const CarouselContainer = styled.div`
height:100vh;
width:100%;
overflow:hidden;
position:relative;
`
const SlideWrapper = styled.div`
display:flex;
height:100%;
width: ${props => `${props.$length * 100}%`};
transition:${props => (props.$animate ? "transform 0.6s ease-in-out" : "none")};
transform: translateX(${props => `-${(props.$index * 100) / props.$length}%`});
`

const ImageWrapper = styled.div`
position:relative;
overflow:hidden;
height:100vh;
flex: 0 0 ${props => `${100 / props.$length}%`};

&::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(35, 34, 34, 0.4);
  z-index: 1;
}
`
const Image = styled.img`
height:100%;
width:100%;
object-fit:cover;
`
const ImageDetails = styled.div`
width:70%;
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
color:white;
text-align:center;
z-index:6;
`

const Title = styled.h1`
 font-family: "Roboto", sans-serif;
 font-size:3.5rem;
 text-transform:capitalize;
 margin-bottom:3rem;
`
const SubTitle = styled.h3`
text-align:center;
 font-family: "Roboto", sans-serif;
 font-size:1.2rem;
 font-weight:400;
 line-height:2rem;
`
const Logo = styled.img`
height:10%;
position:absolute;
top:2rem;
left:3rem;
z-index:13;
`
const PrevBtn = styled.button`
position:absolute;
top:50%;
left:0;
cursor:pointer;
background-color:rgba(19, 53, 123, 0.6);
color:rgba(119, 112, 112, 0.7);
border:none;
border-radius:0 25px 25px 0;
font-size:2rem;
text-align:center;
padding:.7rem 1.2rem .7rem 1rem;

display:flex;
align-items:center;
justify-content:center;
transition:all .3s ease-in-out;

&&:hover{
background-color:rgb(19, 53, 123);
}
`

const NextBtn = styled.button`
position:absolute;
top:50%;
right:0;
transfrom:translateY(-50%);
cursor:pointer;
background-color:rgba(19, 53, 123, 0.6);
color:rgba(119, 112, 112, 0.7);
border:none;
border-radius:25px 0 0 25px;
font-size:2rem;

display:flex;
align-items:center;
justify-content:center;

padding:.7rem 1rem .7rem 1.2rem;
transition:all .3s ease-in-out;


&&:hover{
background-color:rgb(19, 53, 123);
}
`
const carouselImg = [{
    id: 1,
    imgSrc: "/carousel/carousel-1.jpg",
    title: "explore the world",
    subTitle: "Discover breathtaking destinations and immerse yourself in unique cultures across the globe. From historic landmarks to serene landscapes, your next adventure awaits!"
}, {
    id: 2,
    imgSrc: "/carousel/carousel-2.jpg",
    title: "Find Your Perfect Tour with Travel",
    subTitle: "Explore a wide range of tour packages tailored to suit your preferences. Whether it’s adventure, relaxation, or cultural exploration, we have the perfect trip for you!"
}, {
    id: 3,
    imgSrc: "/carousel/carousel-3.jpg",
    title: "Golden Triangle of Rajasthan",
    subTitle: "Experience the royal heritage of India with a journey through Jaipur, Jodhpur, and Udaipur. Discover majestic palaces, vibrant bazaars, and timeless traditions in the heart of Rajasthan."
}]



export const Header = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    const [animate, setAnimate] = useState(true)

    // clone first and last slides
    const slides = carouselImg
    const nextSlide = () => {
        setCurrentSlideIndex((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 10000);
        return () => clearInterval(interval)
    }, [])


    return (
        <CarouselContainer>
            <SlideWrapper $index={currentSlideIndex} $length={slides.length} $animate={animate}>
                {slides.map((item, index) =>
                (<ImageWrapper key={index} $length={slides.length}>
                    <Image src={item.imgSrc} alt={item.title} />
                    <ImageDetails>
                        <Title>{item.title}</Title>
                        <SubTitle>{item.subTitle}</SubTitle>
                    </ImageDetails>
                </ImageWrapper>)
                )}
            </SlideWrapper>
            {/* <BtnContainer> */}
            <Logo src="/Logo/logo.png" alt="logo" />
            <PrevBtn onClick={prevSlide}><GrPrevious /></PrevBtn>
            <NextBtn onClick={nextSlide}><GrNext /></NextBtn>
            {/* </BtnContainer> */}
        </CarouselContainer >
    )
}