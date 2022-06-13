import styled from 'styled-components';

export const DivText = styled.div`
    width: 50%;
    background-color: #121214;
    color: #a8a8b3;
    padding: clamp(2rem, 5rem, 4.5vw);
    box-sizing: border-box;
`;

export const Title = styled.h3`
    font-size: clamp(1rem, 1.3rem, 2vw);
    color: #fff;
    margin: 1rem 0 0.5rem 0;
`;

export const Description = styled.p`
    font-size: clamp(0.5rem, 1rem, 1vw);
    box-sizing: border-box;
    line-height: 1.5;
`;
