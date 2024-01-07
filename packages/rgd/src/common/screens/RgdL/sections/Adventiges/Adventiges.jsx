import React from "react";
import { AdventigesGrid } from "./sections/AdventigesGrid";
import styled from "styled-components";

const StyledAdventiges = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 41px;
  max-width: 947px;
  position: relative;
  width: 100%;

  & .text-wrapper-44 {
    align-self: stretch;
    color: var(--variable-collection-BLACK);
    font-family: "RussianRail G Pro-Regular", Helvetica;
    font-size: 50px;
    font-weight: 400;
    letter-spacing: 2.5px;
    line-height: 48.5px;
    margin-top: -1px;
    position: relative;
  }

  & .text-wrapper-45 {
    align-self: stretch;
    color: var(--variable-collection-BLACK);
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
    position: relative;
  }
`;

export const Adventiges = () => {
  return (
    <StyledAdventiges>
      <p className="text-wrapper-44">/ ПРЕИМУЩЕСТВА РАБОТЫ В РЖД</p>
      <p className="text-wrapper-45">
        Каждому нашему работнику мы стремимся обеспечить благоприятную и мотивирующую среду, вместе с каждым из них
        уверенно идем вперед и строим будущее Российских железных дорог.
      </p>
      <AdventigesGrid />
    </StyledAdventiges>
  );
};
