import React from "react";
import { MapTexts } from "./sections/MapTexts";
import { MapTextsValues } from "./sections/MapTextsValues";
import { MapVector } from "./sections/MapVector";
import styled from "styled-components";

const StyledMap = styled.div`
  height: 646.56px;
  position: relative;
  width: 1250px;

  & .overlap-9 {
    height: 647px;
    position: relative;
  }
`;

export const Map = () => {
  return (
    <StyledMap>
      <div className="overlap-9">
        <MapTextsValues />
        <MapVector />
        <MapTexts />
      </div>
    </StyledMap>
  );
};
