import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  background-color: var(--secondary-color);
  color: white;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 30px;
  max-width: 1200px;
`;

const NavLogo = styled.a`
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    display: block;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ active }) => (active ? '0' : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background-color: var(--secondary-color);
  }
`;

const NavItem = styled.li`
  height: 80px;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: auto;
  }
`;

const NavLink = styled.a`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: var(--primary-color);
    text-decoration: none;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: block;

    &:hover {
      color: var(--primary-color);
      transition: all 0.3s ease;
    }
  }
`;

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const changeNavBackground = () => {
      if (window.scrollY >= 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', changeNavBackground);
    return () => {
      window.removeEventListener('scroll', changeNavBackground);
    };
  }, []);

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <NavLogo href="#hero" onClick={closeMobileMenu}>
          Ujjval Chopra
        </NavLogo>
        <MenuIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MenuIcon>
        <NavMenu active={click}>
          <NavItem>
            <NavLink href="#about" onClick={closeMobileMenu}>
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#education" onClick={closeMobileMenu}>
              Education
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#experience" onClick={closeMobileMenu}>
              Experience
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#projects" onClick={closeMobileMenu}>
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#skills" onClick={closeMobileMenu}>
              Skills
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact" onClick={closeMobileMenu}>
              Contact
            </NavLink>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;