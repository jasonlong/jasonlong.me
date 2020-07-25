import Head from 'next/head'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Logos from '../components/logos'
import SocialMediaIcon from '../components/social-media-icon'

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Jason Long</title>
        <meta name="description" content="Personal site of Jason Long" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script async defer data-domain="jasonlong.me" src="https://plausible.io/js/plausible.js" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>

      <div className="bg-white dark:bg-gray-900 flex flex-col pt-8 text-gray-900 text-left xl:text-left">
        <Hero />

        <div className="px-8 flex mt-4 md:mt-6">
          <SocialMediaIcon icon="GitHub" url="https://github.com/jasonlong" />
          <SocialMediaIcon icon="Twitter" url="https://twitter.com/jasonlong" />
          <SocialMediaIcon icon="Dribbble" url="https://dribbble.com/jasonlong" />
        </div>

        <Logos />

      </div>

    </Layout>
  )
}
