import styled from 'styled-components';
import Button from '../Button';

export const LogoImage = styled.img`
    max-width: 300px;
    
    @media (max-width: 800px){
        margin-left: 20px;
        width: 200px;
        

    }
`;

export const MenuWrapper = styled.nav`
    width: 100%;
    height: 94px;
    background-color: var(--black);

    position: fixed;
    top: 0;
    left: 0;
    padding-left: 1%;
    padding-right: 3%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid var (--primary);
    @media (max-width: 800px){
        justify-content: center;

    }
`;

