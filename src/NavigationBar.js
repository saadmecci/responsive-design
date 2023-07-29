import React, { useEffect, useState } from 'react';

import styled from 'styled-components/macro';

import mark from './assets/mark.svg';
import menu from './assets/menu.svg';
import { FreeTrialButton, MenuButton, NavbarButton } from './Buttons';

const Navbar = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    padding: 24px 42px 0px 42px;
    box-sizing: border-box;
    position: relative;
`
const LeftNav = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 850px) {
        & > div:not(:first-child) {
          display: none;
        }
    }
`
const RightNav = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 850px) {
        & > button {
          display: none;
        }
    }
`
const LogoContainer = styled.div`
    height: 37.5px;
    width: 41.25px;
`
const HamburgerButton = styled.button`
    display: none;
    background-color: transparent;
    border: transparent;

    @media (max-width: 850px) {
        display: block;
    }
`;
const Menu = styled.div`
    display: none;
    

    ${props =>
        props.menuIsOpen &&
        `
            display: flex;
            flex-direction: column;
            top: 80px;
            right: 42px;
            height: 200px;
            width: 100vh !important;
            background-color: #FFFFFF;
            border-radius: 8px;
            margin-top: 50px;
        `
    }
`;

const NavigationBar = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuIsOpen(prevState => !prevState);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 850 && menuIsOpen) {
              setMenuIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [menuIsOpen]);
  
    return (
      <Navbar>
        <LeftNav>
          <LogoContainer>
            <img src={mark} alt="Company Logo" />
          </LogoContainer>
          <div>
            <NavbarButton>Product</NavbarButton>
            <NavbarButton>Features</NavbarButton>
            <NavbarButton>Marketplace</NavbarButton>
            <NavbarButton>Company</NavbarButton>
          </div>
        </LeftNav>
        <RightNav>
          <NavbarButton>Log in</NavbarButton>
          <FreeTrialButton>Start Free Trial</FreeTrialButton>
        </RightNav>
        <HamburgerButton onClick={toggleMenu}><img src={menu} alt="Horizontal Lines Menu" /></HamburgerButton>
        <Menu menuIsOpen={menuIsOpen}>
            <MenuButton>Product</MenuButton>
            <MenuButton>Features</MenuButton>
            <MenuButton>Marketplace</MenuButton>
            <MenuButton>Company</MenuButton>
            <MenuButton>Log in</MenuButton>
            <FreeTrialButton>Start Free Trial</FreeTrialButton>
        </Menu>
      </Navbar>
    );
  };

export default NavigationBar;