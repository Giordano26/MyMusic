import React from 'react';
import Menu from './components/Menu';
import styled from 'styled-components';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

const AppWrapper = styled.div`
  background: var(--grayDark);
  padding-top: 94px;

  @media (max-width: 800px){
    padding-top: 40px;
  }
`;

function App() {
  return (
    <AppWrapper >
      <Menu />
      <BannerMain
        videoTitle = "The Dark Side of The Moon"
        videoDescription= "Tracks:"
        url="https://www.youtube.com/watch?v=yXWSq5UyERo&t"
        />
    </AppWrapper>
  );
}

export default App;
