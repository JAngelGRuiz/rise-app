import React from 'react';
import Img from '../../assets/homecard.jpg';
import { CardContainer,
  Image,
  Category,
  Line,
  Badge,
  HeadContainer,
  TitleContainer,
  DescriptionContainer,
  ImageContainer,
  Icon,
  CardTitle } from './styles';

const Card = (props) => {

  const { double, featured, color, title } = props;

  return (
    <CardContainer double={double}>
      <ImageContainer featured={featured} color={color}>
        <Image Img={Img} alt='Card-Proof' />
        { featured &&
          (
            <Badge color={color}>
              <Icon className='fas fa-star' />
              Featured
            </Badge>
          )}
      </ImageContainer>
      <DescriptionContainer>
        <HeadContainer>
          <Category>Video</Category>
          <Line color={featured ? color : null} />
        </HeadContainer>
        <TitleContainer>
          <CardTitle double={double}>
            {title}
          </CardTitle>
        </TitleContainer>
      </DescriptionContainer>
    </CardContainer>
  );
};

export default Card;
