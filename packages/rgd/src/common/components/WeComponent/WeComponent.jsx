import React from "react";
import styled from "styled-components";

const StyledWeComponent = styled.div`
  height: 151px;
  position: relative;
  width: 387px;

  & .text-wrapper-8 {
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Regular", Helvetica;
    font-size: 28px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 86px;
    width: 387px;
  }

  & .img-5 {
    height: 60px;
    left: 0;
    position: absolute;
    top: -2px;
    width: 181px;
  }
`;

export const WeComponent = ({ className }) => {
  return (
    <StyledWeComponent className={`we-component ${className}`}>
      <div className="text-wrapper-8">Пассажирские перевозки</div>
      <img className="img-5" alt="Img" src="https://psb-eta.vercel.app/rgd/desktop/img/19.png" />
    </StyledWeComponent>
  );
};
