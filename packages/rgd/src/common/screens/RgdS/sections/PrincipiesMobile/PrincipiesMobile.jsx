import React from "react";
import { ElementWrapper } from "../../../../components/ElementWrapper";
import styled from "styled-components";

const StyledPrincipiesMobile = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 584px;
  position: relative;
  width: 100%;

  & .text-wrapper-22 {
    color: #000000;
    font-family: "RussianRail G Pro-Regular", Helvetica;
    font-size: 32px;
    font-weight: 400;
    letter-spacing: 1.6px;
    line-height: 31px;
    margin-top: -1px;
    position: relative;
    width: fit-content;
  }

  & .two-MOBILE {
    align-self: stretch !important;
    flex: 1 !important;
    flex-grow: 1 !important;
    height: unset !important;
    left: unset !important;
    position: relative !important;
    top: unset !important;
    width: 100% !important;
  }
`;

export const PrincipiesMobile = () => {
  return (
    <StyledPrincipiesMobile>
      <div className="text-wrapper-22">/ НАШИ ПРИНЦИПЫ</div>
      <ElementWrapper className="two-MOBILE" element="https://psb-eta.vercel.app/rgd/mobile/img/02-mobile.svg" prop="one" />
    </StyledPrincipiesMobile>
  );
};
