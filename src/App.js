import React from 'react';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container';
import Navc from './Navc';
import Sectionone from './Sectionone';
import Aboutme from './Aboutme';
import Footer from './Footer';
import Talk from './Talk';
import News from './News';
import Portfolio from './Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs">
  <Navc></Navc>
  <Sectionone></Sectionone>
  <Aboutme></Aboutme>
  <Portfolio></Portfolio>
  <Talk></Talk>
  <News></News>

  <Footer></Footer>

</ThemeProvider>
  );
}

export default App;
