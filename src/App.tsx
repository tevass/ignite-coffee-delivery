import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CartContextProvider } from './contexts/CartContext'
import { OrderContextProvider } from './contexts/OrderContext'
import { Router } from './Router'

import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <OrderContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </OrderContextProvider>
      </CartContextProvider>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
