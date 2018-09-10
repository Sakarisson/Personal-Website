import React from 'react';
import styled from 'styled-components';

import Buttons from './Buttons';
import ScreenText from './ScreenText';

const Terminal = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #646568;
  margin: auto;
  grid-area: middle;
  @media (max-width: 570px) {
    width: 100%;
  }
`;

const Menu = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 20%;
  background-color: #151515;
  margin: 0 auto;
`;

const Screen = styled.div`
  background-color: #151515;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 15px;
`;

export default () => (
  <Terminal>
    <Menu>
      <Buttons />
    </Menu>
    <Screen>
      <ScreenText />
    </Screen>
  </Terminal>
);
