import styled from 'styled-components';
import { Link as LinkRoute } from 'react-router-dom';

export const HeadlineWrapper = styled.div`
    margin: 25px auto;
    padding: 15px 0px;
    border-bottom: 1px solid rgba(0,0,0, 0.5);
`;

export const Head = styled.h1`
    font-size: 58px;
    letter-spacing: -4px;
    color: #333333;

    @media screen and (max-width: 380px){
        font-size: 48px;
    }
`;

export const Explanation = styled.h3`
    font-size: 16px;
    color: #333333;
    opacity: .7;
    padding: 12px 0px;
    max-width: 65%;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 25px;

    @media screen and (max-width: 980px){
        max-width: 80%;
    }
    @media screen and (max-width: 767px){
        max-width: 96%;
    }
    @media screen and (max-width: 380px){
        font-size: 14px;
    }
`;

export const LinkSection = styled.div`
    margin-top: 9px;
    margin-bottom: 7px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 25%;

    @media screen and (max-width: 1300px){
        width: 35%;
    }
    @media screen and (max-width: 980px){
        width: 45%;
    }
    @media screen and (max-width: 767px){
        width: 55%;
    }
    @media screen and (max-width: 590px){
        width: 70%;
    }
    @media screen and (max-width: 480px){
        width: 50%;
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 380px){
        width: 60%;
    }

`;

export const LearnMore = styled.span`
    color: #b3b3b3;
    font-size: 14px;
    font-weight: 600;
    @media screen and (max-width: 480px){
        grid-column: 1/3;
        margin-bottom: 15px;
    }
`;

export const Link = styled(LinkRoute)`
    font-size: 14px;
    color: #ff6900;
    font-weight: 600;
    text-align: center;

    @media screen and (max-width: 480px){
        text-align: left;
    }
`;

