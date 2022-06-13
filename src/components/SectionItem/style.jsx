import styledComponents from "styled-components";

export const Item = styledComponents.div`
    width: 20%;
    text-align: center;
`

export const Title = styledComponents.h2`
    font-size: clamp(1rem, 1.3rem, 2vw);
    margin: .8rem;
`;

export const Description = styledComponents.p`
    color: #a8a8b3;
    font-size: clamp(.8rem, 1rem, 1.5vw);
`;