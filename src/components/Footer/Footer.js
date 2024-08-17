import React from 'react';
import { AiFillGithub, AiFillBehanceCircle, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:604-818-3336">604-818-3336</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:info@excelsiortek.com">info@excelsiortek.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan style={{textAlign: "start", marginLeft: "-10px"}}>Building effective telecommunications infrastructure with a focus on safety.</Slogan>
        </CompanyContainer>
        {/* <SocialContainer>
        <SocialIcons href="https://github.com/NicolasCandelaria" target= "_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/nicolasc-ux/" target= "_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.behance.net/nicolascandela" target= "_blank">
        <AiFillBehanceCircle size="3rem" />
      </SocialIcons>
      </SocialContainer> */}
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
