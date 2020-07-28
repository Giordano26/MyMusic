import React from 'react';
import Logo from '../../assets/img/logo.png';
import '../Menu/Menu.css';
import Button from '../Button';
import {LogoImage, MenuWrapper} from './style.js'


function Menu(){
    return (
     <MenuWrapper className="Menu">
         <a href="/">
           <div className="center"><LogoImage src={Logo} alt="MyMusic logo" /></div>
         </a>
         <Button as="a" className ="ButtonLink" href="/">
             Novo Vídeo
         </Button>
     </MenuWrapper>
    );
}

export default Menu;
