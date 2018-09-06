import React from 'react';
import styled from 'styled-components';

import Buttons from './Buttons';
import ScreenText from './ScreenText';

const Terminal = styled.div`
  width: 550px;
  border: 1px solid #646568;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  @media (max-width: 570px) {
    width: 100%;
  }
`;

const Menu = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 25px;
  background-color: #151515;
  margin: 0 auto;
`;

const Screen = styled.div`
  background-color: #151515;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
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
