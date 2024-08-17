import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <br />
    <SectionDivider />
    <br />
    <br />
    <br />
    <SectionTitle>Our Services</SectionTitle>
    <SectionText>We have worked with a range of technologies, from Fusion Splicing to Network Audits</SectionText>
    <List>
    <ListItem>
        <DiZend size="3rem"/>
        <ListContainer>
          <ListTitle>Splicing</ListTitle>
          <ListParagraph>
            Feeder and <br />
            GPON
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>OTDR Testing</ListTitle>
          <ListParagraph>
            End-to-end and<br />
            Emergency Restoration
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Outside Plant Builds</ListTitle>
          <ListParagraph>
            Aerial and <br />
            Underground Solutions
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
