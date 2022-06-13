import React from 'react';
import {
  Div, Ul, Li, Copyright,
} from './style';

export default function Menu() {
  return (
    <Div>
      <Ul>
        <Li>About</Li>
        <Li>Contact</Li>
        <Li>Terms of Use</Li>
        <Li>Privacy Policy</Li>
      </Ul>

      <Copyright>&copy; Bianca Cunha, 2021. All Rights Reserved.</Copyright>
    </Div>
  );
}
