import '@/styles/globals.css'
import { Layout } from '@/components'
import {StateContext} from '../Context/StateContext'

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}
