import React from "react";
import { ImgWrapper } from "../../../../components/ImgWrapper";
import styled from "styled-components";

const StyledRgdPrincipes = styled.div`
  height: 777px;
  left: 4px;
  width: 100%;
  position: relative;

  & .component-1536 {
    top: 118px !important;
  }

  & .text-wrapper-28 {
    color: var(--variable-collection-BLACK);
    font-family: "RussianRail G Pro-Regular", Helvetica;
    font-size: 50px;
    font-weight: 400;
    left: 45px;
    letter-spacing: 2.5px;
    line-height: 48.5px;
    position: absolute;
    top: 0;
    width: 668px;
  }
`;

export const RgdPrincipes = () => {
  return (
    <StyledRgdPrincipes>
      <ImgWrapper className="component-1536" element="https://psb-eta.vercel.app/rgd/desktop/img/image-3.svg" prop="thirteen" />
      <div className="text-wrapper-28">/ НАШИ ПРИНЦИПЫ</div>
    </StyledRgdPrincipes>
  );
};
