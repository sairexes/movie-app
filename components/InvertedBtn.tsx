import styled from 'styled-components';

export const InvertedBtn = styled.button`
    width: 100%;
    margin-bottom: 0.75em;
    margin-right: 0.25em;
    cursor: pointer;
    display: inline-block;
    min-height: 1em;
    outline: 0;
    border: none;
    vertical-align: baseline;
    padding: .78571429em 0.2em .78571429em;
    line-height: 1em;
    font-style: normal;
    text-align: center;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    box-shadow: 0 0 0 2px #0855f4 inset!important;
    color: #0855f4!important;
    background: transparent none!important;
    font-weight: 500;
    font-size: 12px;

    &:hover {
        background: #0855f4 none !important;
        color: #ffffff!important;
    }
`;