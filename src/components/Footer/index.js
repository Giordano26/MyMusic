import React from 'react';
import { FooterBase} from './styles';

function Footer() {
  return (
    <FooterBase>
      <icons>
        <icon>
          <a href="https://github.com/Giordano26">
           GitHub
          </a>
        </icon>
      </icons>
      <p>
      Orgulhosamente criado durante a imersão react da Alura
      </p>
    </FooterBase>
  );
}

export default Footer;
