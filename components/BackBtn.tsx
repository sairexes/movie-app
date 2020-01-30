import styled from 'styled-components';

const BackBtnStyled = styled.button`
    margin-bottom: 0.75em;
    margin-right: 0.25em;
    cursor: pointer;
    display: inline-block;
    min-height: 25px;
    outline: 0;
    border: none;
    vertical-align: baseline;
    font-style: normal;
    text-align: center;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    box-shadow: 0 0 0 2px #0855f4 inset!important;
    color: #fff !important;
    background: #0855f4 !important;
    font-weight: bold;
    border-radius: 5px;
    position: relative;
    padding-left: 25px;

    &:hover {
        background: transparent !important;
        color: #0855f4 !important;

        svg {
            fill: currentColor;
        }
    }

    svg {
        left: 8px;
        position: absolute;
        fill: white;
    }
`;

    type Props = {
    }

    const BackBtn: React.FunctionComponent<Props> = ({
    }) => (
        <BackBtnStyled>
            <svg width="14" height="14" viewBox="0 0 16 16">
            <defs>
                <path id="a" d="M-1.12 4L5 10.107 11.12 4 13 5.88l-8 8-8-8z" />
            </defs>
            <use fillRule="evenodd" transform="rotate(90 6.97 9.97)" xlinkHref="#a" />
            </svg>
            Back
        </BackBtnStyled>
    )

  export default BackBtn;

