import * as React from 'react'
import { Row, Col } from 'react-styled-flexboxgrid'
import { ThemeProvider } from 'styled-components'
import ListCard from './ListCard'
import { PrimaryBtn } from './PrimaryBtn'
import styled from 'styled-components'
import { Movie } from '../interfaces'
import { TMDB_IMG_POSTER_URL } from '../utils/constants'
import { LoadingImg, LoadingBtn, LoadingSubTitle, LoadingCard } from './ContentLoader'

const ViewAllWrapper = styled.div`
    margin-top:20px;
`;

const theme = {
    flexboxgrid: {
        // Defaults
        gridSize: 10, // columns
        gutterWidth: 1, // rem
        outerMargin: 2, // rem
        mediaQuery: 'only screen',
        container: {
        sm: 46, // rem
        md: 61, // rem
        lg: 76  // rem
        },
        breakpoints: {
        xs: 0,  // em
        sm: 48, // em
        md: 64, // em
        lg: 75  // em
        }
    }
};

type Props = {
    movies: Movie[],
    loading: Boolean
}

const tempArr = [1,2,3,4,5];

const DetailsSection: React.FunctionComponent<Props> = ({
    movies,
    loading
}) => (
  <React.Fragment>
      <ThemeProvider theme={theme}>
        <h2>Related Videos</h2>
        <Row>
            { loading ? (
                tempArr.map( (_key, index:number) => (
                    <Col key={index} xs={5} sm={5} md={2} lg={2}>
                        <LoadingImg className="loading"></LoadingImg>
                        <LoadingCard>
                            <LoadingSubTitle className="loading"></LoadingSubTitle>  
                            <LoadingBtn className="loading"></LoadingBtn>
                        </LoadingCard>
                    </Col> 
                ))
            ) : (
                movies.map( movie => (
                    <Col key={movie.id} xs={5} sm={5} md={2} lg={2}>
                        <ListCard title={movie.original_title} path={`${TMDB_IMG_POSTER_URL}${movie.poster_path}`}></ListCard>
                    </Col>
                ))
            )}
        </Row>
        <ViewAllWrapper>
            <Row>
                { !loading && (
                    <Col smOffset={3} mdOffset={4} xs={10} sm={4} md={2}>
                        <PrimaryBtn>View All</PrimaryBtn>
                    </Col>
                )}
            </Row>
        </ViewAllWrapper>
      </ThemeProvider>
  </React.Fragment>
)

export default DetailsSection
