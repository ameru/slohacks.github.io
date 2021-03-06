import React from 'react';
import styled from 'styled-components';

import {
  Hero,
  Hackathon,
  Tracks,
  AboutUs,
  Schedule,
  Sponsors,
  FAQ,
  Footer,
} from '../sections';

import {
  pattern4,
} from '../images';

const IndexPage = () => (
  <WrapperContainer>
    <Hero />
    <Hackathon />
    <Tracks />
    <AboutUs />
    <ScheduleWrapper>
      <Schedule />
    </ScheduleWrapper>
    <FAQ />
    <Sponsors />
    <Footer />
  </WrapperContainer>
);

const WrapperContainer = styled.div`
  color: #2A34B1;
`;

const ScheduleWrapper = styled.div`
  background-image: url(${pattern4});
  background-repeat: no-repeat;
  background-position: right -18rem bottom;
`;

export default IndexPage;
