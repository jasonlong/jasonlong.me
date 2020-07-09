import Layout from "../components/layout.js"
import Link from 'next/link'
import Head from 'next/head'

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Jason Long</title>
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
