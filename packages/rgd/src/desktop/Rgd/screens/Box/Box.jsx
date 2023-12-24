import React from "react";
import styled from "styled-components";
import { ElementRaex } from "./sections/ElementRaex";
import { RgdAdvantages } from "./sections/RgdAdvantages";
import { RgdCompanies } from "./sections/RgdCompanies";
import { RgdDo } from "./sections/RgdDo";
import { RgdMap } from "./sections/RgdMap";
import { RgdPeople } from "./sections/RgdPeople";
import { RgdPrincipes } from "./sections/RgdPrincipes";
import { RgdRating } from "./sections/RgdRating";
import { RgdSliderWrapper } from "./sections/RgdSliderWrapper";
import { RgdVectors } from "./sections/RgdVectors";

const StyledBox = styled.div`
  position: relative;

  & .group-5 {
   display: flex;
    flex-direction: column;
    gap: 70px;
  }
`;

export const Box = () => {
  return (
    <StyledBox>
      <div className="group-5">
        <RgdSliderWrapper />
        <RgdRating />
        <RgdCompanies />
        <RgdPeople />
        <RgdDo />
        <RgdVectors />
         <RgdAdvantages />
        <RgdPrincipes />
        <RgdMap />
        <ElementRaex />
      </div>
    </StyledBox>
  );
};
