import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';

const boxBackgroundColor = theme('mode', {
  light: '#fff',
  dark: '#000',
});

const Box = styled.div`
  background-color: ${boxBackgroundColor};
`;

const Home = () => (
  <ThemeProvider theme={{ mode: 'light' }}>
    <Box>
      Hello World
    </Box>
  </ThemeProvider>
);

export default Home;
