import * as React from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import InfoHeader from '../components/InfoHeader'
import SearchSection from '../components/SearchSection'
import DetailsSection from '../components/DetailsSection'
import RelatedSection from '../components/RelatedSection'
import { Movie } from '../interfaces'

type Props = {
  movie: Movie,
  related: Movie[]
}
const IndexPage: NextPage<Props> = ({
  movie,
  related
}) => {
  return (
    <Layout title="Movie App">
        <InfoHeader movie={movie}></InfoHeader>
        <SearchSection></SearchSection>
        <DetailsSection movie={movie}></DetailsSection>
        <RelatedSection movies={related}></RelatedSection>
    </Layout>
  )
}

IndexPage.getInitialProps = async ({ pathname }) => {
  const movieRes = await fetch(`https://api.themoviedb.org/3/movie/399579?api_key=${process.env.TMDB_API_KEY}&language=en-US`);
  const relatedRes = await fetch(`https://api.themoviedb.org/3/movie/399579/similar?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`);
  const movie = await movieRes.json();
  const relatedMovies = await relatedRes.json();
  const related = relatedMovies.results.splice(0,5);
  
  return { movie, related, pathname }
}

export default IndexPage
