import type { AppProps } from 'next/app'

import { theme } from '../chakra/theme'
import { ChakraProvider } from '@chakra-ui/react'

import Layout from '../components/Layout'

const App = ({ Component, pageProps }: AppProps) => {
  return <>
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  </>
}

export default App