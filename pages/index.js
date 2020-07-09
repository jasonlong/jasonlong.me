import Layout from "../components/layout"
import Link from 'next/link'
import Head from 'next/head'
import Hero from '../components/hero'

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Jason Long</title>
        <meta name="description" content="Personal site of Jason Long"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@800&display=swap" rel="stylesheet" />
      </Head>

      <div className="container flex flex-col pt-32 h-screen text-gray-900 px-6 text-left xl:text-left max-w-2xl md:max-w-3xl mx-auto">

        <Hero />

        <div className="flex">
          <a href="https://github.com/jasonlong">
            <img src="icons/github.svg" alt="GitHub" className="w-12 md:w-16 pr-2" />
          </a>

          <a href="https://twitter.com/jasonlong">
            <img src="icons/twitter.svg" alt="Twitter" className="w-12 md:w-16 pr-2" />
          </a>

          <a href="mailto:jason@jasonlong.me">
            <img src="icons/gmail.svg" alt="Email me" className="w-12 md:w-16 pr-2" />
          </a>
        </div>
      </div>
    </Layout>
  )
}
