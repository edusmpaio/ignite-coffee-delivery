import React from 'react'
import ReactDOM from 'react-dom/client'

import { Router } from './Router'
import { GlobalStyle } from './styles/global'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
)
