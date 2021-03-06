/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 5;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 60px;
    transform: initial;
    &:before {
      font-size: 45px;
      @media(max-width:800px){
          display:none;
      }
    }
  }
  
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 30px;
  }

`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;


const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 500,
      centerMode: true,
      variableWidth: true,
      adaptiveHeight: true,
    }}
    >
      {children}
    </SlickSlider>
  </Container>

);

export default Slider; 