import React from 'react';
import { DivContact, Title, Paragraph } from './style';

export default function Contact({ title, phone, email }) {
  return (
    <DivContact>
      <Title>{title}</Title>

      <Paragraph>
        {phone}
        {' '}
        |
        {' '}
        {email}
      </Paragraph>
    </DivContact>
  );
}
