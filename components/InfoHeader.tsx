import * as React from 'react'
import { Row, Col } from 'react-styled-flexboxgrid'
import { CircularAvatar } from './CircularAvatar'
import { TitleHeader } from './TitleHeader'
import { InvertedBtn } from './InvertedBtn'
import styled from 'styled-components'
import { Movie, VoidFunc } from '../interfaces'
import { TMDB_IMG_BASE_URL } from '../utils/constants'
import { LoadingAvatar, LoadingBtn, LoadingTitle } from './ContentLoader'

const InfoHeaderWrapper = styled.div`
    border-bottom: 2px solid #c8defd;
    margin-bottom: 20px;

    & >div>div {
        margin-bottom: 10px;
    }

    svg {
        fill: #7FA7F7;
        cursor: pointer;

        &.faved {
            fill: #e4cd00;
        }
    }
`;

type Props = {
  movie: Movie,
  onFav: VoidFunc,
  favorite: Boolean,
  loading: Boolean
}

const InfoHeader: React.FunctionComponent<Props> = ({
    movie,
    onFav,
    favorite,
    loading
}) => (
  <React.Fragment>
    <InfoHeaderWrapper>
      <Row middle="xs">
            <Col xs={12} sm={6} md={10} lg={10}>
                <Row middle="xs">
                    <React.Fragment>
                        <Col>
                            { loading ? (
                                <LoadingAvatar className="loading"></LoadingAvatar>  
                            ) : (
                                <CircularAvatar src={`${TMDB_IMG_BASE_URL}${movie.backdrop_path}`}></CircularAvatar>
                            )} 
                        </Col>
                        <Col>
                            { loading ? (
                                <LoadingTitle className="loading"></LoadingTitle>  
                            ) : (
                                <TitleHeader>{ movie.original_title }</TitleHeader> 
                            )}
                        </Col>
                        <Col>
                            { !loading && (
                                <svg onClick={onFav} className={`${favorite ? 'faved' : ''}`} height="24px" width="24px" viewBox="0 -10 511.99143 511" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657"/>
                                </svg>
                            )}
                        </Col>
                    </React.Fragment>
                </Row>
            </Col>
            <Col xs={12} sm={6} md={2} lg={2}>
                <Row middle="xs">
                    <React.Fragment>
                        <Col xs={4} sm={4} md={12} lg={12}>
                            { loading ? (
                                <LoadingBtn className="loading"></LoadingBtn>  
                            ) : (
                                <InvertedBtn>Play Video</InvertedBtn>
                            )}
                        </Col>
                        <Col xs={4} sm={4} md={12} lg={12}>
                            { loading ? (
                                <LoadingBtn className="loading"></LoadingBtn>  
                            ) : (
                                <InvertedBtn>Watch Later</InvertedBtn>
                            )}
                        </Col>
                        <Col xs={4} sm={4} md={12} lg={12}>
                            { loading ? (
                                <LoadingBtn className="loading"></LoadingBtn>  
                            ) : (
                                <InvertedBtn>Share</InvertedBtn>
                            )}
                        </Col>
                    </React.Fragment>
                </Row>
            </Col>
      </Row>
    </InfoHeaderWrapper>
  </React.Fragment>
)

export default InfoHeader
