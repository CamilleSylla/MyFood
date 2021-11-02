import NavBar from '../components/Items/NavBar/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <>
    <NavBar/>
    <Component {...pageProps} />
    </>

  )
  return 
}

export default MyApp
