import React from "react";
import { Raiting } from "../../components/Raiting";
import { AboutMobile } from "./sections/AboutMobile";
import { FootterMobile } from "./sections/FootterMobile";
import { PeopleMobile } from "./sections/PeopleMobile";
import { PrincipiesMobile } from "./sections/PrincipiesMobile/PrincipiesMobile";
import { SliderMobile } from "./sections/SliderMobile";
import { VectorsMobile } from "./sections/VectorsMobile";
import { We } from "../../components/We/We";
import styled from "styled-components";

const StyledHhS = styled.div`
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  gap: 49px;
  max-width: 300px;
  position: relative;
`;

export const RgdS = () => {
  return (
    <StyledHhS>
      <SliderMobile />
      <Raiting />
      <AboutMobile />
      <We />
      <PeopleMobile />
      <PrincipiesMobile />
      <VectorsMobile />
      <FootterMobile />
    </StyledHhS>
  );
};