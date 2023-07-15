import React from 'react'
import MarketingApp from './components/MarketingApp'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import { StylesProvider, createGeneratedClassName } from '@material-ui/core'

const generateClassName = createGeneratedClassName({
  productionPrefix: 'co'
})

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  )
}
