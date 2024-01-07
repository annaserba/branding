import React from "react";
import { AdventigesComponent } from "./sections/AdventigesComponent";
import { AdventigesComponentWrapper } from "./sections/AdventigesComponentWrapper";
import { Div } from "./sections/Div";
import { SectionComponentNode } from "./sections/SectionComponentNode";
import styled from "styled-components";

const StyledAdventigesGrid = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 1;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 125px 70px;
  position: relative;
  width: 100%;
`;

export const AdventigesGrid = () => {
  return (
    <StyledAdventigesGrid>
      <AdventigesComponent />
      <AdventigesComponentWrapper />
      <Div />
      <SectionComponentNode />
    </StyledAdventigesGrid>
  );
};
