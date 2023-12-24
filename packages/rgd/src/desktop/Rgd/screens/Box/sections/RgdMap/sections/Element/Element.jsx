import React from "react";
import styled from "styled-components";

const StyledElement = styled.div`
  height: 79px;
  left: 390px;
  position: absolute;
  top: 689px;
  width: 205px;

  & .text-wrapper-9 {
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Regular", Helvetica;
    font-size: 25px;
    font-weight: 400;
    left: 0;
    letter-spacing: 1.25px;
    line-height: 24.2px;
    position: absolute;
    top: 55px;
    white-space: nowrap;
  }

  & .img-4 {
    height: 44px;
    left: 7px;
    position: absolute;
    top: 0;
    width: 62px;
  }
`;

export const Element = () => {
  return (
    <StyledElement>
      <div className="text-wrapper-9">железных дорог</div>
      <img className="img-4" alt="Element" src="https://psb-eta.vercel.app/rgd/desktop/img/16.svg" />
    </StyledElement>
  );
};
