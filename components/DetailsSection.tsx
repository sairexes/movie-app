import * as React from 'react'
import { Row, Col } from 'react-styled-flexboxgrid'
import ImgPoster from './ImgPoster'
import { Movie } from '../interfaces'
import { TMDB_IMG_POSTER_URL } from '../utils/constants'

type Props = {
    movie: Movie
}

const DetailsSection: React.FunctionComponent<Props> = ({
    movie
}) => (
  <React.Fragment>
      <h2>Synopsis</h2>
      <Row>
            <Col xs={12} sm={12} md={9} lg={9}>
                {`${movie.overview}`}    
            </Col>
            <Col xs={12} sm={12} md={3} lg={3}>
                <ImgPoster src={`${TMDB_IMG_POSTER_URL}${movie.poster_path}`}></ImgPoster>
            </Col>
      </Row>
  </React.Fragment>
)

export default DetailsSection
