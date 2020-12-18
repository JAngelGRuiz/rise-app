import styled, { css } from 'styled-components';

const MENU_DOWN = '1000px';
const MENU_DOWN_CONFIG = `@media screen and (min-width: 768px) and (max-width: ${MENU_DOWN})`;
const MobileHeight = 55;

const ResponsiveMove = css`
    margin-top: 20px;
`;

const MobileIconProperties = css`
    display: none;

    @media screen and (max-width: 767px){
        display: block;
    }
`;

const HideWhenMobile = css`
    @media screen and (max-width: 767px){
        display: none;
    }
`;

const IconConfig = css`
    font-size: 30px;
    margin: 7px;
    padding: 3px;

    @media screen and (max-width: 480px){
        font-size: 25px;
    }
`;

const openStyles = css`
    @media screen and (max-width: 767px){
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        position: absolute;
        top: ${`${MobileHeight}px`};
        height: 100vh;
        width: 100%;
        background-color: white; 
        z-index: 100;   
    }
`;

const openOverlay = css`
    display: block;
`;

export const Overlay = styled.div`
    height: 100%;
    position: fixed;
    top: 55px;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 30;
    background-color: rgba(0,0,0,0.6);
    display: none;
    ${(props) => props.open && openOverlay}
`;

export const HeaderWrapper = styled.header`
    width: 100%;
    height: 75px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0, 0.2);
    position: relative;
    z-index: 31;

    ${MENU_DOWN_CONFIG}{
        height: 110px;
    }
    @media screen and (max-width: 767px){
        height: ${`${MobileHeight}px`};
    }
`;

export const MenuWrapper = styled.div`
    width: 100%;
    max-width: 1700px;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
   
    ${MENU_DOWN_CONFIG}{
        align-items: flex-start;
        justify-content: space-between;
    }
    @media screen and (max-width: 767px){
        justify-content: space-around;
    }
`;

export const LogoWrapper = styled.div`
   
`;

export const NavigationWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    ${MENU_DOWN_CONFIG}{
        position: absolute;
        top: 75px;
        width: 100vw;
        padding: 0px 20px;
    }
    ${HideWhenMobile}
    ${(props) => props.openMenuMobil && openStyles}
`;

export const SearchingWrapper = styled.div`
    position: relative;
`;

export const Logo = styled.img.attrs((props) => ({ src: props.src }))`
    width: 150px;
    margin: 5px;

    @media screen and (min-width: 1700px){
        width: 190px;
    }
    ${MENU_DOWN_CONFIG}{
        ${ResponsiveMove}
    }
    @media screen and (max-width: 320px){
        width: 120px;
    }
`;

const handlePadding = css`
    padding: 12px;
`;

export const Input = styled.input.attrs({ type: 'search' })`
    border-radius: 20px;
    height: 35px;
    width: 250px;
    border: 1px solid rgba(0,0,0, 0.5);
    padding: 12px 35px;
    background-color: transparent;
    ${(props) => props.focus && handlePadding}

    @media screen and (min-width: 1700px){
        width: 300px;
    }
    ${HideWhenMobile}
    ${MENU_DOWN_CONFIG}{
        ${ResponsiveMove}
    }
`;

const quit = css`
    display: none;
    color: red;
`;

export const SearchingIcon = styled.i`
    font-size: 22px;
    position: absolute;
    padding: 7px 12px;
    z-index: -1;
    ${(props) => props.focus && quit}

    ${MENU_DOWN_CONFIG}{
        padding: 28px 12px;
    }
    @media screen and (max-width: 767px){
        position: initial;
    }
`;

export const BurgerMenu = styled.i`
    ${IconConfig}
    ${MobileIconProperties}
`;

export const CloseButton = styled.i`
    ${IconConfig}
    ${MobileIconProperties}
    width: 32px;

    @media screen and (max-width: 480px){
        width: 28px;
    }
`;
