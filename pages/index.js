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
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@800&display=swap" rel="stylesheet" />
        <script async defer data-domain="jasonlong.me" src="https://plausible.io/js/plausible.js"></script>
      </Head>

      <div className="dark:bg-gray-900 container flex flex-col pt-24 h-screen text-gray-900 px-6 text-left xl:text-left max-w-2xl md:max-w-3xl mx-auto">

        <Hero />

        <div className="flex mt-4 md:mt-6">
          <SocialMediaIcon icon="GitHub" url="https://github.com/jasonlong" />
          <SocialMediaIcon icon="Twitter" url="https://twitter.com/jasonlong" />
          <SocialMediaIcon icon="Dribbble" url="https://dribbble.com/jasonlong" />
        </div>
      </div>

    </Layout>
  )
}
