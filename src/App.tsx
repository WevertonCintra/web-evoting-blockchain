import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './routes/index'
import { GlobalStyle, Container } from './styles/global'
import { theme } from './styles/theme'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Container>
          <Router />
        </Container>
        <Footer />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
