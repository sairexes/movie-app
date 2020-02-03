import * as React from 'react'
import styled from 'styled-components';

export const LoadingAvatar = styled.div`
    border-radius: 50%;
    width: 90px;
    height: 90px;
    background-color: #d8e4fc;
`;

export const LoadingTitle = styled.div`
    width: 300px;
    height: 1.5em;
    background-color: #d8e4fc;
`;

export const LoadingCard = styled.div`
    background: white;
    padding: 15px;
`;

export const LoadingSubTitle = styled.div`
    width: 100%;
    height: 1em;
    background-color: #d8e4fc;
    margin-bottom: 10px;
`;

export const LoadingBtn = styled.div`
    padding: .375rem .75rem;
    background-color: #d8e4fc;
    margin-bottom: 0.75em;
    margin-right: 0.25em;
    line-height: 1em;
    min-height: 1em;
`;

export const LoadingImg = styled.div`
    min-height: 350px;
    background-color: #d8e4fc;
`;

export const LoadingBar = styled.div`
    display: inline-block;
    width: 50px;
    height: 20px;
    background-color: #d8e4fc;
    margin-top: 8px;
    margin-right: 10px;
    &:nth-child(2n+1) {
        width: 240px;
    }

    &:nth-child(3n+2) {
        width: 78px;
    }

    &:nth-child(5n+3) {
        width: 169px;
    }

    &:nth-child(7n+5) {
        width: 130px;
    }

    &:nth-child(11n+7) {
        width: 83px;
    }
`;

const ParagraphWrapper = styled.div`
    width:100%;
`;

type Props = {
    numberOfBars:number
}
export const LoadingParagraph: React.FunctionComponent<Props> = ({
    numberOfBars
}) => {
    const bars = Array.from(Array(numberOfBars).keys());
    return (
       <ParagraphWrapper>
           {bars.map((_num:number, index:number) => (
                <LoadingBar key={index} className="loading" />
            ))}
       </ParagraphWrapper> 
    )
}