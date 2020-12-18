import React from 'react';
import { MainContainer } from './styles';
import Headline from '../Headline/Headline';
import CardsWrapper from '../CardsWrapper/CardsWrapper';

const Main = () => {
  return (
    <MainContainer>
      <Headline />
      <CardsWrapper />
    </MainContainer>
  );
};

export default Main;
