import React from 'react';


import {Container, HashtagIcon, Title, Separator, Description } from './styles';

const Channelinfo
: React.FC = () => {
  return (
    <Container>
    <HashtagIcon />
    <Title>chat-livre</Title>

    <Separator />

    <Description>Canal aberto para convesas</Description>
  </Container>
  );
};

export default Channelinfo
;