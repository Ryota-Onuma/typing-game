import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import { initializeApollo } from '../lib/apolloClient'
import type { AppPropsWithLayout } from 'next/app'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const client = initializeApollo()
  return <ApolloProvider client={client}>{getLayout(<Component {...pageProps} />)}</ApolloProvider>
}

export default MyApp
