import React from 'react';

import QRCode from 'react-native-qrcode';

import {Container, Code} from './styles';

function Menu() {
  return (
    <Container>
      <Code>
        <QRCode
          value="https://github.com/bhct"
          size={80}
          bgColor="#FFF"
          fgColor="#8b10ae"
        />
      </Code>
    </Container>
  );
}

export default Menu;
