import React from "react";
import styled from "styled-components";

const StyledWeComponent6 = styled.div`
  height: 148px;
  position: relative;
  width: 387px;

  & .text-wrapper-13 {
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Regular", Helvetica;
    font-size: 28px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 115px;
    width: 387px;
  }

  & .img-10 {
    height: 86px;
    left: -2px;
    position: absolute;
    top: 0;
    width: 86px;
  }
`;

export const WeComponent6 = ({ className }) => {
  return (
    <StyledWeComponent6 className={`we-component-6 ${className}`}>
      <div className="text-wrapper-13">Наука</div>
      <img className="img-10" alt="Img" src="https://psb-eta.vercel.app/rgd/desktop/img/9.png" />
    </StyledWeComponent6>
  );
};
