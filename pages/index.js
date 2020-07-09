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

        <p className="py-2 text-md md:text-lg font-medium">
          <a href="https://github.com/jasonlong" className="text-blue-700 hover:text-blue-800">GitHub</a>
        </p>
        <p className="py-2 text-md md:text-lg font-medium">
          <a href="https://twitter.com/jasonlong" className="text-blue-700 hover:text-blue-800">Twitter</a>
        </p>
        <p className="py-2 text-md md:text-lg font-medium">
          <a href="mailto:jason@jasonlong.me" className="text-blue-700 hover:text-blue-800">Email</a>
        </p>
      </div>
    </Layout>
  )
}
