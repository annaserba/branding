import React from "react";
import { DivWrapper } from "../../../../../../components/DivWrapper/DivWrapper";
import { ElementWrapper } from "../../../../../../components/ElementWrapper/ElementWrapper";
import { Overlap } from "./sections/Overlap/Overlap";
import styled from "styled-components";

const StyledSectionComponentNode = styled.div`
  height: 768px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1160px;

  & .component-1529 {
    left: 905px !important;
    position: absolute !important;
    top: 682px !important;
  }

  & .component-1530 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-48.svg) !important;
    left: 1003px !important;
    position: absolute !important;
    top: 682px !important;
  }
`;

export const SectionComponentNode = () => {
  return (
    <StyledSectionComponentNode>
      <Overlap />
      <ElementWrapper className="component-1529" />
      <DivWrapper className="component-1530" />
    </StyledSectionComponentNode>
  );
};