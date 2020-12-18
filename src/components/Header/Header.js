import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { HeaderWrapper,
  LogoWrapper,
  Logo,
  Overlay,
  BurgerMenu,
  CloseButton,
  SearchingIcon,
  NavigationWrapper,
  SearchingWrapper,
  Input,
  MenuWrapper } from './styles';
import LogoImage from '../../assets/DairyGood_logo.svg';

const Header = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const [focus, setFocus] = useState(false);

  return (
    <HeaderWrapper>
      <Overlay open={openMenu} />
      <MenuWrapper>
        {
          openMenu ? <CloseButton onClick={() => setOpenMenu(!openMenu)} className='fas fa-times' /> : <BurgerMenu className='fas fa-bars' onClick={() => setOpenMenu(!openMenu)} />
        }
        <LogoWrapper>
          <Link to='/'><Logo src={LogoImage} alt='logo' /></Link>
        </LogoWrapper>
        <NavigationWrapper openMenuMobil={openMenu}>
          <Navigation />
        </NavigationWrapper>
        <SearchingWrapper onFocus={() => setFocus(!focus)} onBlur={() => setFocus(!focus)}>
          <SearchingIcon className='fas fa-search' focus={focus} />
          <Input focus={focus} />
        </SearchingWrapper>
      </MenuWrapper>
    </HeaderWrapper>
  );
};

export default Header;
