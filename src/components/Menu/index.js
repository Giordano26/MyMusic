import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo.png';
import '../Menu/Menu.css';
import Button from '../Button';
import {LogoImage, MenuWrapper} from './style.js'


function Menu(){
    return (
     <MenuWrapper className="Menu">
         <Link to="/">
           <div className="center"><LogoImage src={Logo} alt="MyMusic logo" /></div>
         </Link>
         <Button as={Link} className ="ButtonLink" to="/cadastro/video">
             Novo Vídeo
         </Button>
     </MenuWrapper>
    );
}

export default Menu;
