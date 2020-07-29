import React from 'react';
import Menu from '../../components/Menu';
import styled from 'styled-components';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

const AppWrapper = styled.div`
  background: var(--grayDark);
  padding-top: 0px;

  @media (max-width: 800px){
    padding-top: 40px;
  }
`;

function Home() {
  return (
    <AppWrapper >
      <Menu />
      <BannerMain
        videoTitle = {dadosIniciais.categorias[0].videos[0].titulo}
        videoDescription= "Tracks:"
        url={dadosIniciais.categorias[0].videos[0].url}
        />
        <Carousel
          ignoreFirstVideo
          category= {dadosIniciais.categorias[0]}
         />
         <Carousel 
          category={dadosIniciais.categorias[1]}
         />
         <Carousel 
          category={dadosIniciais.categorias[2]}
         />
         <Carousel 
          category={dadosIniciais.categorias[3]}
         />
         <Carousel 
          category={dadosIniciais.categorias[4]}
         />
         <Carousel 
          category={dadosIniciais.categorias[5]}
         />
             <Carousel 
          category={dadosIniciais.categorias[6]}
         />
             <Carousel 
          category={dadosIniciais.categorias[7]}
         />
             <Carousel 
          category={dadosIniciais.categorias[8]}
         />
             <Carousel 
          category={dadosIniciais.categorias[9]}
         />
             <Carousel 
          category={dadosIniciais.categorias[10]}
         />
         <Footer/>
    </AppWrapper>
  );
}

export default Home;
