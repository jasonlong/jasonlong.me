import Layout from "../components/layout"
import Link from 'next/link'
import Head from 'next/head'
import Hero from '../components/hero'
import SocialMediaIcon from '../components/social-media-icon'

export default function IndexPage() {

  return (
    <Layout>
      <Head>
        <title>Jason Long</title>
        <meta name="description" content="Personal site of Jason Long"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script async defer data-domain="jasonlong.me" src="https://plausible.io/js/plausible.js"></script>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>

      <div className="dark:bg-gray-900 container flex flex-col pt-16 h-screen text-gray-900 px-6 text-left xl:text-left max-w-2xl md:max-w-3xl mx-auto">
        <Hero />
        <div className="flex mt-4 md:mt-6">
          <span className="dark:text-gray-100"><SocialMediaIcon icon="GitHub" url="https://github.com/jasonlong" /></span>
          <SocialMediaIcon icon="Twitter" url="https://twitter.com/jasonlong" />
          <SocialMediaIcon icon="Dribbble" url="https://dribbble.com/jasonlong" />
        </div>
      </div>

    </Layout>
  )
}
