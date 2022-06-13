import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitterSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Div from './style';

export default function MediaIcons() {
  return (
    <Div>
      <FontAwesomeIcon icon={faFacebook} size="2x" color="#D79F12" />
      <FontAwesomeIcon icon={faTwitterSquare} size="2x" color="#D79F12" />
      <FontAwesomeIcon icon={faInstagram} size="2x" color="#D79F12" />
    </Div>
  );
}
