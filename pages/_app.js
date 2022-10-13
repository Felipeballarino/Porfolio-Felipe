import Head from '../Components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <div className='TOTAL'>
      <Head></Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
