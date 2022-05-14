import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '@/components/layout'
import type { NextPageWithLayout } from 'next'
const Home: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>Top</title>
        <meta name='description' content='top' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Top</h1>
    </div>
  )
}
Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home
