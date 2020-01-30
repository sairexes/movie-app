import styled from 'styled-components';

export const SearchInput = styled.div`
    position: relative;

    svg {
        position: absolute;
        left: 12px;
        top: 12px;
    }

    input {
        margin: 0;
        max-width: 100%;
        width: calc( 100% - 36px);;
        outline: 0;
        text-align: left;
        padding: 10px 5px 10px 31px;
        background: #fff;
        border: 1px solid rgba(34,36,38,.15);
        color: rgba(0,0,0,.87);
        border-radius: 5px;
        -webkit-transition: border-color .1s ease,-webkit-box-shadow .1s ease;
        transition: border-color .1s ease,-webkit-box-shadow .1s ease;
        transition: box-shadow .1s ease,border-color .1s ease;
        transition: box-shadow .1s ease,border-color .1s ease,-webkit-box-shadow .1s ease;
        -webkit-box-shadow: none;
        box-shadow: none;
        font-size: 100%;
    }
`;