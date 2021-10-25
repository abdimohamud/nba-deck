import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../components/ThemeConfig'
function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState({primary:'#FFFFFF', secondary:'#000000', alt:'#000000'}) 

const toggleTheme = (theme) => {
  // console.log(theme)
     setTheme(theme) 
}
  return <ThemeProvider theme={theme}>  <Head>

<link
  href="https://cdn.jsdelivr.net/npm/daisyui@1.11.0/dist/full.css"
  rel="stylesheet"
  type="text/css"
/>
  </Head><GlobalStyles/> <Component {...pageProps} theme={theme} toggleTheme={toggleTheme} /></ThemeProvider>
}

export default MyApp
