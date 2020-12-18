import React from 'react';
import Card from '../Card/Card';
import { Wrapper, Button } from './styles';
import CardsInfo from '../../utils/cards';

const CardsWrapper = (props) => {
  return (
    <Wrapper>
      {
        CardsInfo.map((data, index) => {
          return (
            <Card double={data.double} featured={data.featured} color={data.color} key={index} title={data.title} />
          );
        })
      }
      <Button>See More</Button>
    </Wrapper>
  );
};

export default CardsWrapper;
