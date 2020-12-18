import styled, { css } from 'styled-components';

const LogoGreen = '#7CB82F';

const stylesDouble = css`
    grid-column: 1/3;
    
    @media screen and (max-width: 480px){
        grid-column: 1 / 2;
    }
`;

const stylesDoubleTitle = css`
    font-size: 2em;

    @media screen and (max-width: 480px){
        font-size: 1.3em;
    }
`;

const featured = css`
    border: 2px solid ${(props) => props.color};
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 310px;
    width: 100%;
    cursor: pointer;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0, 0.2);
    font-size: 14px;
    ${(props) => props.double && stylesDouble};

    @media screen and (max-width: 1100px){
        font-size: 12.5px;
    }
    @media screen and (max-width: 995px){
        height: 400px;
        font-size: 16px;
    }
    @media screen and (max-width: 590px){
        font-size: 14.5px;
    }
    @media screen and (max-width: 480px){

    }
`;

export const ImageContainer = styled.div`
    height: 50%;
    width: 100%;
    position: relative;
    ${(props) => props.featured && featured}
`;

export const DescriptionContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    font-family: 'brandon-grotesque';
`;

export const Image = styled.img.attrs((props) => ({ src: props.Img }))`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const Icon = styled.i`
    margin-right: 5px;
`;

export const Badge = styled.div`
    position: absolute;
    width: 90px;
    height: 25px;
    background-color: ${(props) => props.color};
    top: 0;
    color: rgba(255,255,255,.9);
    font-size: .9em;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Category = styled.h4`
    font-size: 1em;
    color: #b3b3b3;
    font-weight: 900;
`;

export const Line = styled.hr`
    border: 3px solid ${(props) => props.color || LogoGreen};
    width: 30px;
    height: 0px;
`;

export const CardTitle = styled.h2`
    font-size: 1.4em;
    color: 888888;
    max-width: 80%;
    margin: auto;
    ${(props) => props.double && stylesDoubleTitle};
`;

export const TitleContainer = styled.div`
    height: 50%;
    width: 100%;
`;

export const HeadContainer = styled.div`
    height: 50%;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;
