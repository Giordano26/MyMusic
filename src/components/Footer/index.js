import React from 'react';
import { FooterBase,icons,icon } from './styles';

function Footer() {
  return (
    <FooterBase>
      <icons>
        <icon>
          <a href="https://github.com/Giordano26">
            <img height="40" src="https://image.flaticon.com/icons/svg/733/733553.svg" alt="Github Logo" />
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
