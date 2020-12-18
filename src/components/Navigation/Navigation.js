import React from 'react';
import { Link } from './styles';

const Navigation = () => {
  return (
    <>
      <Link to='/health-&-wellness'>Health & Wellness</Link>
      <Link to='/Sustentability'>Sustentability</Link>
      <Link to='/Facts & Myths'>Facts & Myths</Link>
      <Link to='/Life on the farm'>Life on the Farm</Link>
      <Link to='/Recipts'>Recipes</Link>
    </>
  );
};

export default Navigation;
