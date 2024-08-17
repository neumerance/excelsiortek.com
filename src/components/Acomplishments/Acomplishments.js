import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { string: "Jack W.", text: 'Wow fantastic!'},
  { string: "Baldwin", text: 'So cool!', },
  { string: "Pakkun", text: 'Pakkun', },
  { string: "Moe", text: 'Very good!', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Testimonials</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.string}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
