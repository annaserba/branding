import React from "react";
import styled from "styled-components";

const StyledWeComponentWrapper = styled.div`
  height: 120px;
  position: relative;
  width: 387px;

  & .text-wrapper-9 {
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

  & .img-6 {
    height: 61px;
    left: 0;
    position: absolute;
    top: -2px;
    width: 148px;
  }
`;

export const WeComponentWrapper = ({ className }) => {
  return (
    <StyledWeComponentWrapper className={`we-component-wrapper ${className}`}>
      <div className="text-wrapper-9">Грузовые перевозки</div>
      <img className="img-6" alt="Img" src="https://psb-eta.vercel.app/rgd/desktop/img/17.png" />
    </StyledWeComponentWrapper>
  );
};
