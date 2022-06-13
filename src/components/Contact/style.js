import styled from 'styled-components';
import footerImage from '../../assets/images/image_header.png';

export const DivContact = styled.div`
    width: 100%;
    height: 20em;
    background: bottom center url(${footerImage});
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h2`
    color: white;
    font-size: clamp(1rem, 1.4rem, 2vw);
`;

export const Paragraph = styled.p`
    color: #ccc;
    font-size: clamp(0.8rem, 1rem, 1.5vw);
    margin: 1rem;
`;
