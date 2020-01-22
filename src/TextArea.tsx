import React from 'react';
import styled from 'styled-components';

interface Props {
    show: boolean
}

const Wrapper = styled.textarea<Props>`
    width: 100%;
    min-height: 5rem;
    color: #000000;
    background-color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    padding: 1rem 0.5rem 0.5rem 1rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 3px;
    box-shadow: 0 1px 0 rgba(9,30,66,.25);
    outline: none;
    cursor: pointer;
    display: ${props => (props.show ? "block" : "none")};

    ::placeholder{
        color: #000000;
    }
`

const TextArea: React.FunctionComponent<Props> = ({ show }) => {

    console.log(show)
    return (
        <Wrapper
            placeholder="Enter a title for this card..."
            show={show}
        >
        </Wrapper>
    )
}

export default TextArea;

