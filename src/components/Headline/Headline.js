import React from 'react';
import { HeadlineWrapper,
  Head,
  Explanation,
  LearnMore,
  Link,
  LinkSection } from './styles';

const Headline = () => {
  return (
    <HeadlineWrapper>
      <Head>Undeniably Devoted to Diary</Head>
      <Explanation>
        Learn why diary and dairy products are contribute to a well-balanced diet. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Quidem, aliquam optio deserunt.
      </Explanation>
      <LinkSection>
        <LearnMore>Learn more: </LearnMore>
        <Link to='/Podcast'>Podcasts</Link>
        <Link to='/Stories'>Stories</Link>
      </LinkSection>
    </HeadlineWrapper>
  );
};

export default Headline;
