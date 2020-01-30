import * as React from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import InfoHeader from '../components/InfoHeader'
import SearchSection from '../components/SearchSection'
import DetailsSection from '../components/DetailsSection'
import RelatedSection from '../components/RelatedSection'

const IndexPage: NextPage = () => {
  return (
    <Layout title="Movie App">
        <InfoHeader title='Test1234'></InfoHeader>
        <SearchSection></SearchSection>
        <DetailsSection></DetailsSection>
        <RelatedSection></RelatedSection>
    </Layout>
  )
}

export default IndexPage
