import { ApolloProvider } from '@apollo/client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import client from '../src/apollo/client'
import Loader from '../src/components/loader'
import '../src/styles/index.scss'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  setTimeout(() => setLoading(false), 1000)

  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => setLoading(true));
    router.events.on('routeChangeComplete', () => setTimeout(() => setLoading(false), 1000) );
    router.events.on('routeChangeError', () => setTimeout(() => setLoading(false), 1000) );
    return () => {
      router.events.off('routeChangeStart', () => setLoading(true));
      router.events.off('routeChangeComplete', () => setTimeout(() => setLoading(false), 1000) );
      router.events.off('routeChangeError', () => setTimeout(() => setLoading(false), 1000) );
    };
  }, [router.events]);

  return(
    <>
      {(loading) ? (
        <Loader />
      ) : (
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      )}
    </>
  )
}

export default MyApp
