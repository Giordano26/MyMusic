import React from 'react';
import Menu from './components/Menu';

import BannerMain from './components/BannerMain';





function App() {
  return (
    <div style={{background: "#141414"}}>
      <Menu />
      <BannerMain
        videoTitle = "The Dark Side of The Moon"
        videoDescription= "Tracks:"
        url="https://www.youtube.com/watch?v=yXWSq5UyERo&t"
        />


      
    </div>
  );
}

export default App;
