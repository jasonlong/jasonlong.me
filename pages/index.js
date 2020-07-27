import Head from 'next/head'
import Layout from '../components/layout'
import Hero from '../components/hero'
import About from '../components/about'
import Logos from '../components/logos'

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Jason Long</title>
        <meta name="description" content="Personal site of Jason Long" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          async
          defer
          data-domain="jasonlong.me"
          src="https://plausible.io/js/plausible.js"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>

      <div className="bg-white dark:bg-gray-900 flex flex-col text-gray-900 text-left xl:text-left">
        <Hero />
        <About />
        <Logos />
      </div>
    </Layout>
  )
}
