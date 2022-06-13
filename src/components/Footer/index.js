import React from 'react';
import { Footer, Div } from './style';

import Contact from '../Contact';
import Menu from '../Menu';
import MediaIcons from '../MediaIcons';

export default function Foot() {
  return (
    <Footer>
      <Contact title="Contact" phone="+55 51 0000-0000" email="sendemail@gmail.com" />

      <Div>
        <Menu />
        <MediaIcons />
      </Div>
    </Footer>
  );
}
