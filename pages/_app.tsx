import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { Theme } from '../src/chakra/theme'
import Layout from '../src/Components/Layout/Layout'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={Theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
