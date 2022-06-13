import styledComponents from 'styled-components';
import headerImage from '../../assets/images/image_header.png';

export const Head = styledComponents.header`
    width: 100%;
    height: 20rem;
    background: center url(${headerImage}) no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Title = styledComponents.h1`
    font-size: clamp(1.5rem, 2.2rem, 3vw);
`