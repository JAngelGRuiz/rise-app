import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 60px auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px;

    @media screen and (max-width: 850px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 995px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 480px){
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Button = styled.button`
    font-family: 'brandon-grotesque';
    height: 50px;
    width: 170px;
    border: none;
    border-radius: 30px;
    background-color: #ff6900;
    color: white;
    font-size: 16px;
    font-weight: 900;
    grid-column: 1/5;
    justify-self: center;
    cursor: pointer;

    @media screen and (max-width: 850px){
        grid-column: 1/4;
    }
    @media screen and (max-width: 995px){
        grid-column: 1/3;
    }
    @media screen and (max-width: 480px){
        grid-column: 1/2;
    }
`;

