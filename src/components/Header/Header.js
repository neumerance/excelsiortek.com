import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillBehanceCircle, AiFillLinkedin } from 'react-icons/ai';
// import { DiDotnet } from 'react-icons/di';
import  SvgNicolaslogo  from './svg';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display:"flex", alignItems: "center", color: 'white', marginBottom: "-50px"}}>
          <SvgNicolaslogo style={{marginBottom: "-5px", position: "absolute", top:"0", filter: "invert(100%) sepia(100%) saturate(1%) hue-rotate(130deg) brightness(102%) contrast(101%)"}} alt="logo" />
          {/* <DiDotnet size="3rem" /> */}
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Services</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    {/* <Div3>
      <SocialIcons href="https://github.com/NicolasCandelaria" target= "_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/nicolasc-ux/" target= "_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.behance.net/nicolascandela" target= "_blank">
        <AiFillBehanceCircle size="3rem" />
      </SocialIcons>
    </Div3> */}
  </Container>
);

export default Header;
