import React from 'react';
import styled from 'styled-components';

// interface Props {
//     top: number,
//     bottom: number,
//     left: number,
//     right: number,
//     width: number | undefined,
//     color: string | undefined,
// }

interface Props {
    top: any,
    right: any,
    bottom: any,
    left: any,
    width: any,
    color: any,
}

const ShapesWrapper = styled.div<Props>`
    border-top: ${props => (props.top) ? `${props.top}px solid` : ''};
    border-right: ${props => (props.right) ? `${props.right}px solid` : ''};
    border-bottom: ${props => (props.bottom) ? `${props.bottom}px solid` : ''};
    border-left: ${props => (props.left) ? `${props.left}px solid` : ''};

    border-top-color: ${props => (props.color) ? `${props.color}` : 'transparent'};
    border-right-color: ${props => (props.color) ? `${props.color}` : 'transparent'};
    border-left-color: ${props => (props.color) ? `${props.color}` : 'transparent'};
    border-bottom-color: ${props => (props.color) ? `${props.color}` : 'transparent'};

    width: 0;

`;

const Shapes: React.FunctionComponent<Partial<Props>> = ({
    top,
    right,
    bottom,
    left,
    width,
    color
}) => {
    return (
        <ShapesWrapper
            top={top}
            right={right}
            bottom={bottom}
            left={left}
            width={width}
            color={color}
        >
        </ShapesWrapper>
    )

}

// ${({ width }) => `width: ${width}px`}

export default Shapes