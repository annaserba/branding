import React from "react";
import { Raiting } from "../../components/Raiting";
import { AboutMobile } from "./sections/AboutMobile";
import { FootterMobile } from "./sections/FootterMobile";
import { PeopleMobile } from "./sections/PeopleMobile";
import { PrincipiesMobile } from "./sections/PrincipiesMobile/PrincipiesMobile";
import { SliderMobile } from "./sections/SliderMobile";
import { VectorsMobile } from "./sections/VectorsMobile";
import { WeMobile } from "./sections/WeMobile/WeMobile";
import styled from "styled-components";

const StyledHhS = styled.div`
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  gap: 49px;
  max-width: 300px;
  position: relative;

  & .raiting-instance {
    align-self: stretch !important;
    flex: 0 0 auto !important;
    width: 100% !important;
  }
`;

export const RgdS = () => {
  return (
    <StyledHhS>
      <SliderMobile />
      <Raiting className="raiting-instance" />
      <AboutMobile />
      <WeMobile />
      <PeopleMobile />
      <PrincipiesMobile />
      <VectorsMobile />
      <FootterMobile />
    </StyledHhS>
  );
};