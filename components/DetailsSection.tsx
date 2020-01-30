import * as React from 'react'
import { Row, Col } from 'react-styled-flexboxgrid'
import ImgPoster from './ImgPoster'
import { sampleMovieData } from './../utils/sample-data'

type Props = {
    description?:string,
    path?:string
}

const DetailsSection: React.FunctionComponent<Props> = ({
}) => (
  <React.Fragment>
      <h2>Synopsis</h2>
      <Row>
            <Col xs={12} sm={12} md={9} lg={9}>
                {`${sampleMovieData[0].description}`}    
            </Col>
            <Col xs={12} sm={12} md={3} lg={3}>
                <ImgPoster src={`${sampleMovieData[0].poster}`}></ImgPoster>
            </Col>
      </Row>
  </React.Fragment>
)

export default DetailsSection
