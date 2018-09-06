import React from 'react';
import styled from 'styled-components';

import Cursor from './Cursor';

const Text = styled.p`
  color: #fff;
  font-family: Inconsolata,monospace;
`;

const ZshArrow = styled.span`
  color: #63f273;
`;

const SiteName = styled.span`
  color: cyan;
`;

const Href = styled.span`
  color: #519ae2;
`;

const Location = styled.span`
  color: #e20909;
`;

const ZshCross = styled.span`
  color: #aeb243;
`;

export default () => (
  <Text>
    <ZshArrow>➜ </ZshArrow>
    <SiteName>sakarisson.com </SiteName>
    <Href>
      href:(
      <Location>index</Location>
      )
    </Href>
    <ZshCross> ✗</ZshCross>
    <Cursor> _</Cursor>
  </Text>
);
