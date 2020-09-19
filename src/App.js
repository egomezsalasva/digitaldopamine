import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'


// const piece4L = "https://media.giphy.com/media/O3lAnjph48xIQ/giphy.gif"
// const piece6L = "https://media.giphy.com/media/olSR1SBiMVG8M/giphy.gif"
// const piece7L = "https://media.giphy.com/media/fU4yzmITANeow/giphy.gif"
// const piece8L = "https://media.giphy.com/media/R4CqQk8RRKVZm/giphy.gif"
// const piece9L = "https://media.giphy.com/media/3o7bu7or07fA0H09nq/giphy.gif"
// const piece10L = "https://media.giphy.com/media/l378jVDa0FaQTDmc8/giphy.gif"

//STYLES
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: white;
  }
`
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(72, 1fr);
  grid-template-rows: repeat(40, 1fr);
`
const Piece01 = styled.div`
  grid-column-start: 1;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 13;
  width: 100%;
  height: 100%;
  background: url(https://media.giphy.com/media/12JAA1gGLbWMA8/giphy.gif);
  background-size: cover;
  background-position: center;
  clip-path: polygon(0 0, 50% 0, 100% 100%, 50% 33.3333333%, 50% 66.6666666667%, 0 100%);
`
const Piece02 = styled.div`
  grid-column-start: 2;
  grid-column-end: 9;
  grid-row-start: 12;
  grid-row-end: 22;
  width: 100%;
  height: 100%;
  background: url(https://media.giphy.com/media/PNzZUSeC9oixG/giphy.gif);
  background-size: cover;
  background-position: center;
  clip-path: polygon(42.8571429% 0, 100% 20%, 57.1428571% 80%, 85.7142857% 100%, 14.2857143% 90%, 42.8571429% 60%, 28.5714286% 60%, 28.5714286% 40%, 0% 60%, 28.5714286% 20%, 0% 30%, 28.5714286% 10%, 71.4285714% 30%);
`
const Piece03 = styled.div`
  grid-column-start: 1;
  grid-column-end: 17;
  grid-row-start: 25;
  grid-row-end: 37;
  width: 100%;
  height: 100%;
  background: url(https://media.giphy.com/media/zFegkS85TBi8w/giphy.gif);
  background-size: cover;
  background-position: right;
  clip-path: polygon(25% 0%, 75% 0%, 50% 33.3333333%, 100% 66.6666667%, 75% 66.6666667%, 25% 33.3333333%, 50% 100%, 0% 66.6666667%);
`

const Piece05 = styled.div`
  grid-column-start: 9;
  grid-column-end: 42;
  grid-row-start: 9;
  grid-row-end: 41;
  width: 100%;
  height: 100%;
  background: url(https://media.giphy.com/media/6ZJjZEBpAErio/source.gif);
  background-size: cover;
  background-position: center;
  clip-path: polygon(24.2424242424% 0, 48.4848484848% 25%, 24.2424242424% 25%, 48.4848484848% 50%, 100% 50%, 72.7272727273% 100%, 24.2424242424% 100%, 48.4848484848% 75%, 0% 25%);
`



function App() {
  return (
    <>
      <GlobalStyle/>

      <Container>
        <Piece01/>
        <Piece02/>
        <Piece03/>

        <Piece05/>

      </Container>
    </>
  )
}
export default App
