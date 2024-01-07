import React from "react";
import { ImgWrapper } from "../../../../components/ImgWrapper";
import styled from "styled-components";

const StyledPrincipies = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 70px;
  position: relative;
  width: 100%;

  & .text-wrapper-46 {
    color: var(--variable-collection-BLACK);
    font-family: "RussianRail G Pro-Regular", Helvetica;
    font-size: 50px;
    font-weight: 400;
    letter-spacing: 2.5px;
    line-height: 48.5px;
    margin-top: -1px;
    position: relative;
    width: 668px;
  }

  & .component-1838 {
    left: unset !important;
    position: relative !important;
    top: unset !important;
  }
`;

export const Principies = () => {
  return (
    <StyledPrincipies>
      <div className="text-wrapper-46">/ НАШИ ПРИНЦИПЫ</div>
      <ImgWrapper className="component-1838" element="https://psb-eta.vercel.app/rgd/desktop/img/image-5.svg" prop="thirteen" />
    </StyledPrincipies>
  );
};
