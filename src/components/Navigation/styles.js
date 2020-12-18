import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Link = styled(LinkRouter)`
    margin: 0px 1vw;
    padding: 0px 1vw;
    font-size: 15px;
    color: rgba(0,0,0, 0.6);
    font-family: 'Open Sans';
    width: auto;
    text-align: center;
    font-weight: 600;
    line-height: 16px;

    @media screen and (max-width: 995px){
        margin: 0px .5vw;
        padding: 0px .5vw;
        font-size: 14.5px;
    }
    @media screen and (max-width: 767px){
        font-size: 14px;
        margin: 5px;
        padding: 16px 6px;
        text-align: left;
        width: 94%;
        border-bottom: 1px solid rgba(0,0,0, 0.1);
    }
    @media screen and (max-width: 650px){
        font-size: 14px;
    }
    @media screen and (min-width: 1700px){
        margin: 0px 40px;
        padding: 0px 10px;
        font-size: 18px;
    }
`;

export default Link;
