import React from 'react';
import MainContent from './style';
import GridRow from '../GridRow';

import img01 from '../../assets/images/img01.png';
import img02 from '../../assets/images/img02.png';
import img03 from '../../assets/images/img03.png';

export default function Main() {
    return (
        <MainContent>
            <GridRow
                title="Lorem Ipsum"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id elementum sem. In hac habitasse platea dictumst. In consequat eros at massa pharetra, at scelerisque ligula iaculis. Maecenas pellentesque mollis enim. Morbi risus magna, rhoncus vel nisl fringilla, rhoncus scelerisque magna. Quisque in vulputate ex, cursus finibus sem. Nullam non mollis turpis. In viverra elementum ipsum eu pharetra. Integer id aliquam odio, id pretium metus. Proin sed elementum arcu. Praesent fermentum molestie tempor. Cras vestibulum, dolor sed pretium varius, nisi urna vehicula erat, et tincidunt sem felis ut leo. Ut est tellus, vulputate vulputate mattis non, vehicula placerat orci. Cras dignissim suscipit erat sed blandit."
                img={img01}
            />
            <GridRow
                title="Lorem Ipsum"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id elementum sem. In hac habitasse platea dictumst. In consequat eros at massa pharetra, at scelerisque ligula iaculis. Maecenas pellentesque mollis enim. Morbi risus magna, rhoncus vel nisl fringilla, rhoncus scelerisque magna. Quisque in vulputate ex, cursus finibus sem. Nullam non mollis turpis. In viverra elementum ipsum eu pharetra. Integer id aliquam odio, id pretium metus. Proin sed elementum arcu. Praesent fermentum molestie tempor. Cras vestibulum, dolor sed pretium varius, nisi urna vehicula erat, et tincidunt sem felis ut leo. Ut est tellus, vulputate vulputate mattis non, vehicula placerat orci. Cras dignissim suscipit erat sed blandit."
                img={img02}
                rowreverse
            />
            <GridRow
                title="Lorem Ipsum"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id elementum sem. In hac habitasse platea dictumst. In consequat eros at massa pharetra, at scelerisque ligula iaculis. Maecenas pellentesque mollis enim. Morbi risus magna, rhoncus vel nisl fringilla, rhoncus scelerisque magna. Quisque in vulputate ex, cursus finibus sem. Nullam non mollis turpis. In viverra elementum ipsum eu pharetra. Integer id aliquam odio, id pretium metus. Proin sed elementum arcu. Praesent fermentum molestie tempor. Cras vestibulum, dolor sed pretium varius, nisi urna vehicula erat, et tincidunt sem felis ut leo. Ut est tellus, vulputate vulputate mattis non, vehicula placerat orci. Cras dignissim suscipit erat sed blandit."
                img={img03}
            />
        </MainContent>
    );
}
