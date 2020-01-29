import * as React from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import InfoHeader from '../components/InfoHeader'

const IndexPage: NextPage = () => {
  return (
    <Layout title="Movie App">
        <InfoHeader title='Test1234'></InfoHeader>
    </Layout>
  )
}

export default IndexPage
