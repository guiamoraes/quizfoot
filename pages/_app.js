import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json';
import IndexPage from '../src/components/IndexPage';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background-color: yellow;
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

// const theme = {
//   colors: {
//     primary: '#0070f3',
//   },
// }
const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <IndexPage></IndexPage>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
