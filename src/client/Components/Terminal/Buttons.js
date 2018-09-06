import React, { Fragment } from 'react';
import styled from 'styled-components';

const Button = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: 1px solid #000;
  position: relative;
  top: 6px;
  left: ${({ left }) => left};
  background-color: ${({ background }) => background};
  border-color: ${({ border }) => border};
  display: inline-block;
`;

const MinimizeButton = () => (
  <Button
    left="11px"
    background="#ffc100"
    border="#9d802c"
  />
);

const ZoomButton = () => (
  <Button
    left="16px"
    background="#00d742"
    border="#049931"
  />
);

const CloseButton = () => (
  <Button
    left="6px"
    background="#ff3b47"
    border="#9d252b"
  />
);

export default () => (
  <Fragment>
    <CloseButton />
    <MinimizeButton />
    <ZoomButton />
  </Fragment>
);
