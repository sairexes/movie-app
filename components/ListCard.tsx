import * as React from 'react'
import { Row, Col } from 'react-styled-flexboxgrid'
import ImgPoster from './ImgPoster'
import { PrimaryBtn } from './PrimaryBtn'
//import { sampleMovieData } from './../utils/sample-data'
import styled from 'styled-components'

const ListCardWrapper = styled.div`
    background: white;
    position: relative;
    max-width: 100%;
    overflow:hidden;

    img {
        object-position: 50% 50%;
        max-height: 350px;
    }
`;

const CardDetail = styled.div`
    padding: 15px;

    .title-name {
        font-weight: 600;
    }

    >div {
        margin-bottom: 15px;
    }
`;

type Props = {
    title?:string,
    path?:string
}

const ListCard: React.FunctionComponent<Props> = ({
    title,
    path
}) => (
  <React.Fragment>
      <ListCardWrapper>
        <Row>
                <Col xs={10}>
                    <ImgPoster src={path}></ImgPoster>
                </Col>
                <Col xs={10}>
                    <CardDetail>
                        <div className="title-name">{title}</div>  
                        <PrimaryBtn>Watch</PrimaryBtn>
                    </CardDetail>
                </Col>
        </Row>
      </ListCardWrapper>
  </React.Fragment>
)

export default ListCard
