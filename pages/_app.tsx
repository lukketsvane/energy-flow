import { AppProps } from 'next/app';  // import the AppProps type from Next.js
import '../styles/globals.css'
import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }: AppProps) {  // add the AppProps type
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
