import React from "react";
import styled from "styled-components";

const StyledWeComponent5 = styled.div`
  height: 132px;
  position: relative;
  width: 387px;

  & .text-wrapper-12 {
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Regular", Helvetica;
    font-size: 28px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 101px;
    white-space: nowrap;
    width: 387px;
  }

  & .img-9 {
    height: 66px;
    left: -1px;
    position: absolute;
    top: 0;
    width: 123px;
  }
`;

export const WeComponent5 = ({ className }) => {
  return (
    <StyledWeComponent5 className={`we-component-5 ${className}`}>
      <div className="text-wrapper-12">Социальная сфера</div>
      <img className="img-9" alt="Img" src="https://psb-eta.vercel.app/rgd/desktop/img/11.png" />
    </StyledWeComponent5>
  );
};
