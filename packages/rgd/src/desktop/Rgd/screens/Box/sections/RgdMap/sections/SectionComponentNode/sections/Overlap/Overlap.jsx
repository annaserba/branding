import React from "react";
import styled from "styled-components";
import { OverlapWrapper } from "./sections/OverlapWrapper";
import { View } from "./sections/View";
import { ViewWrapper } from "./sections/ViewWrapper";

const StyledOverlap = styled.div`
  height: 666px;
  left: 2px;
  position: absolute;
  top: 0;
  width: 1157px;
`;

export const Overlap = () => {
  return (
    <StyledOverlap>
      <View />
      <OverlapWrapper />
      <ViewWrapper />
    </StyledOverlap>
  );
};
