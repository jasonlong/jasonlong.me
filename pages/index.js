import Layout from "../components/layout.js"
import Link from 'next/link'
import Head from 'next/head'

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Jason Long</title>
        <meta name="description" content="Personal site of Jason Long"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
        <meta name="twitter:description" content="GitHub Product Designerd" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="white" />
      </Head>

      <div className="container flex flex-col pt-32 h-screen text-gray-900 px-6 text-left xl:text-left max-w-2xl md:max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm Jason Long,
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-600">
            a product designer at GitHub.
          </h2>
        </div>

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
