import { GlobalStyle, ThemeProvider } from '@amsterdam/asc-ui'
import App from 'next/app'
import '../public/fonts/fonts.css'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
