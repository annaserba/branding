import React from "react";
import styled from "styled-components";

const StyledWeComponent4 = styled.div`
  height: 132px;
  position: relative;
  width: 387px;

  & .text-wrapper-11 {
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Regular", Helvetica;
    font-size: 28px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 102px;
    white-space: nowrap;
    width: 387px;
  }

  & .img-8 {
    height: 75px;
    left: 0;
    position: absolute;
    top: -2px;
    width: 87px;
  }
`;

export const WeComponent4 = ({ className }) => {
  return (
    <StyledWeComponent4 className={`we-component-4 ${className}`}>
      <div className="text-wrapper-11">Строительство</div>
      <img className="img-8" alt="Img" src="https://psb-eta.vercel.app/rgd/desktop/img/13.png" />
    </StyledWeComponent4>
  );
};
