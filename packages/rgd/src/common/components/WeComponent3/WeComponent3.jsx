import React from "react";
import styled from "styled-components";

const StyledWeComponent3 = styled.div`
  height: 120px;
  position: relative;
  width: 387px;

  & .text-wrapper-10 {
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Regular", Helvetica;
    font-size: 28px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 87px;
    width: 387px;
  }

  & .img-7 {
    height: 61px;
    left: 0;
    position: absolute;
    top: -2px;
    width: 149px;
  }
`;

export const WeComponent3 = ({ className }) => {
  return (
    <StyledWeComponent3 className={`we-component-3 ${className}`}>
      <div className="text-wrapper-10">Инфраструктура</div>
      <img className="img-7" alt="Img" src="https://psb-eta.vercel.app/rgd/desktop/img/15.png" />
    </StyledWeComponent3>
  );
};
