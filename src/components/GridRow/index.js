import React from 'react';
import styled from 'styled-components';
import { DivText, Title, Description } from './style';

export default function GridRow(props) {
    const Row = styled.div`
        width: 100%;
        height: 25rem;
        display: flex;
        flex-direction: ${props.rowreverse ? 'row-reverse' : null};
    `;
    const DivImage = styled.div`
        width: 50%;
        background: center url(${props.img});
        background-size: cover;
    `;

    return (
        <Row>
            <DivText>
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>
            </DivText>

            <DivImage />
        </Row>
    );
}
