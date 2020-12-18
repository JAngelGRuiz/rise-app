import React from 'react';
import Logo from '../../assets/ndc-logo.png';
import { FooterWrapper,
  MainContainer,
  LearnContainer,
  ContactContainer,
  LinksWrapper,
  Learn,
  Link,
  Text,
  WrapperContact,
  SocialContactWrapper,
  SocialMediaWrapper,
  SocialMedia,
  ContactButton,
  Image,
  Terms } from './styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <MainContainer>
        <LearnContainer>
          <LinksWrapper>
            <Learn>LEARN</Learn>
            <Link to='/about-us'>About Us</Link>
            <Link to='/health-and-wellness'>Health & Wellness</Link>
            <Link to='/life-on-the-farm'>Life on the Farm</Link>
            <Link to='/dairy-dictionary'>Dairy Dictionary</Link>
            <Link to='/sustainability'>Sustainability</Link>
            <Link to='/recipes'>Recipes</Link>
            <Link to='/events'>Events</Link>
            <Link to='/facts-and-myths'>Facts & Myths</Link>
            <Link to='/resource-library'>Resource Library</Link>
          </LinksWrapper>
        </LearnContainer>
        <ContactContainer>
          <WrapperContact>
            <SocialMediaWrapper mobile={true}>
              <SocialMedia className='fab fa-facebook-f' />
              <SocialMedia className='fab fa-twitter' />
              <SocialMedia className='fab fa-pinterest-p' />
              <SocialMedia className='fab fa-instagram' />
              <SocialMedia className='fas fa-rss' />
            </SocialMediaWrapper>
            <SocialContactWrapper><Text>If you have any question about any of the content of this site, please contact us</Text></SocialContactWrapper>
            <SocialContactWrapper>
              <SocialMediaWrapper>
                <SocialMedia className='fab fa-facebook-f' />
                <SocialMedia className='fab fa-twitter' />
                <SocialMedia className='fab fa-pinterest-p' />
                <SocialMedia className='fab fa-instagram' />
                <SocialMedia className='fas fa-rss' />
              </SocialMediaWrapper>
              <ContactButton>Contact Us</ContactButton>
            </SocialContactWrapper>
            <SocialContactWrapper terms={true}>
              <Text> @ 2018 Dairy Managment Inc. </Text>
              <Terms>Terms of Use | Privacy Policy</Terms>
            </SocialContactWrapper>
            <SocialContactWrapper>
              <Text>Visit our content partner</Text>
              <Image source={Logo} alt='partner' />
            </SocialContactWrapper>
          </WrapperContact>
        </ContactContainer>
      </MainContainer>
    </FooterWrapper>
  );
};

export default Footer;
