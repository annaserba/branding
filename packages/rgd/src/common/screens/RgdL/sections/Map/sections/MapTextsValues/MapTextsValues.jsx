import React from "react";
import styled from "styled-components";

const StyledMapTextsValues = styled.div`
  align-items: flex-start;
  display: inline-flex;
  gap: 85px;
  left: 0;
  position: absolute;
  top: 580px;

  & .element-10 {
    height: 66.53px;
    position: relative;
    width: 337.13px;
  }

  & .text-wrapper-33 {
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Regular", Helvetica;
    font-size: 25px;
    font-weight: 400;
    left: 0;
    letter-spacing: 1.25px;
    line-height: 24.2px;
    position: absolute;
    top: 46px;
    white-space: nowrap;
    width: 335px;
  }

  & .element-KM {
    height: 38px;
    left: 4px;
    position: absolute;
    top: 0;
    width: 293px;
  }

  & .element-11 {
    height: 66.38px;
    margin-right: -2px;
    position: relative;
    width: 220.75px;
  }

  & .text-wrapper-34 {
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Regular", Helvetica;
    font-size: 25px;
    font-weight: 400;
    left: 0;
    letter-spacing: 1.25px;
    line-height: 24.2px;
    position: absolute;
    top: 46px;
    white-space: nowrap;
    width: 219px;
  }

  & .element-12 {
    height: 37px;
    left: 8px;
    position: absolute;
    top: 0;
    width: 66px;
  }
`;

export const MapTextsValues = () => {
  return (
    <StyledMapTextsValues>
      <div className="element-10">
        <div className="text-wrapper-33">железнодорожных путей</div>
        <img className="element-KM" alt="Element KM" src="https://psb-eta.vercel.app/rgd/desktop/img/85-000-km.svg" />
      </div>
      <div className="element-11">
        <div className="text-wrapper-34">железных дорог</div>
        <img className="element-12" alt="Element" src="https://psb-eta.vercel.app/rgd/desktop/img/16.svg" />
      </div>
    </StyledMapTextsValues>
  );
};
