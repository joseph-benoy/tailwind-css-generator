import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppLayout from '../common/components/layout/App-layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (<AppLayout><Component {...pageProps} /></AppLayout>)
}

export default MyApp
