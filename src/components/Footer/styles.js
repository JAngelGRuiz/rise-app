import styled, { css } from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

const TermnsResponsive = css`
    flex-wrap: wrap;
`;

const responsiveWrappers = css`
    @media screen and (max-width: 1280px){
        width: 90%;
    }
    @media screen and (max-width: 1100px){
        grid-column-gap: 0%;
    }
    @media screen and (max-width: 980px){
        width: 95%;
    }
    @media screen and (max-width: 767px){
        width: 100%;   
    }
`;

const responsiveContainers = css`
    @media screen and (max-width: 767px){
        width: 75%;
    }
`;

// Genral Containers //
export const FooterWrapper = styled.footer`
    height: 280px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333333;
    color: white;

    @media screen and (max-width: 767px){
        height: 400px;
    }
    @media screen and (max-width: 540px){
        height: 550px;
    }
`;

export const MainContainer = styled.div`
    height: 100%;
    width: 100%;
    max-width: 1700px;
    display: flex;
    justify-content: center;
    background-color: #333333;
    color: white;
    font-size: 16px;

    @media screen and (max-width: 980px){
        font-size: 15px;
    }
    @media screen and (max-width: 767px){
        font-size: 14px;
        flex-direction: column;
        align-items: center;
    }
`;

export const LearnContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${responsiveContainers}
`;

export const ContactContainer = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${responsiveContainers}
`;
// Learn Container Content //
export const LinksWrapper = styled.div`
    display: grid;
    height: 70%;
    width: 80%;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 8%;
    ${responsiveWrappers}

    @media screen and (max-width: 540px){
        grid-template-columns: repeat(2, 1fr);  
        grid-row-gap: 20px;
        grid-column-gap: 4%;
    }
`;

export const Learn = styled.span`
    grid-column: 1/4;
    font-size: 1.5em;
    font-weight: bold;
    border-bottom: 3px solid white;
    width: 10%;
    height: 80%;
    opacity: 0.9;

    @media screen and (max-width: 540px){
        grid-column: 1/3;
        height: 120%;
    }
`;

export const Link = styled(LinkRouter)`
    font-size: 1em;
    color: #fff;
    opacity: 0.8;
    height: 15px;
    line-height: 13px;
`;
// Contact Container Content //

export const WrapperContact = styled.div`
    height: 70%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    color: rgba(255,255,255,0.8);
    text-align: right;
    @media screen and (max-width: 767px){
        height: 100%;
    }
    ${responsiveWrappers}
`;

export const Text = styled.span`
    font-size: 1em;
    align-self: center;
`;

export const Terms = styled.span`
    text-decoration: underline white;
    align-self: center;
    font-size: 1em;
    cursor: pointer;
`;

export const Image = styled.img.attrs((props) => ({ src: props.source }))`
    width: 60px;
    align-self: center;
    cursor: pointer;
`;

export const SocialContactWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 10px;

    @media screen and (max-width: 767px){
        width: 100%;
        justify-content: center;
        text-align: center;
    }
    ${(props) => props.terms && TermnsResponsive}
`;

const mobileSocial = css`
    display: none;

    @media screen and (max-width: 480px){
        display: flex;
    }
`;

export const SocialMediaWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    align-self: center;

    @media screen and (max-width: 480px){
        display: none;
    }
    ${(props) => props.mobile && mobileSocial}
`;

export const SocialMedia = styled.i`
    font-size: 1.5em;
    color: rgba(255,255,255,0.9);
    cursor: pointer;
`;

export const ContactButton = styled.button`
    font-size: 1em;
    width: 60%;
    height: 45px;
    border: 3px solid rgba(255,255,255,0.9);
    border-radius: 25px;
    background-color: transparent;
    color: rgba(255,255,255,0.9);
    align-self: center;
    font-weight: 600;
    cursor: pointer;
`;

