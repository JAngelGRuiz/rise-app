import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @font-face {
        font-family: 'brandon-grotesque';
        src: local('brandon-grotesque'),
        url(${'http://typekit.com/eulas/0000000000000000000132e3'}) format('opentype');
    }

    body{
        font-family: 'brandon-grotesque'
    }
`;
