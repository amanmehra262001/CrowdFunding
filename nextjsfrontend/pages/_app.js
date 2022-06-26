import '../styles/globals.css'
import {MoralisProvider} from 'react-moralis'

function MyApp({ Component, pageProps }) {
  return (
  <MoralisProvider initializeOnMount={false}> 
  <Component {...pageProps} />
  </MoralisProvider>
  )
}

export default MyApp
// initializeOnMount is an optionality to hook into a server to provide some more functionality here