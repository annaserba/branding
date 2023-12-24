import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 79px;
  left: 0;
  position: absolute;
  top: 689px;
  width: 313px;

  & .text-wrapper-10 {
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

  & .element-KM {
    height: 45px;
    left: 4px;
    position: absolute;
    top: 0;
    width: 272px;
  }
`;

export const Div = () => {
  return (
    <StyledDiv>
      <div className="text-wrapper-10">железнодорожных путей</div>
      <img className="element-KM" alt="Element KM" src="https://psb-eta.vercel.app/rgd/desktop/img/85-000-km.svg" />
    </StyledDiv>
  );
};
