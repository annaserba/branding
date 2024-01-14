import React from "react";
import { ElementMobile } from "../../../../components/ElementMobile";
import styled from "styled-components";

const StyledSliderMobile = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 512px;
  position: relative;
  width: 295px;

  & .one-MOBILE {
    align-self: stretch !important;
    flex: 1 !important;
    flex-grow: 1 !important;
    height: unset !important;
    position: relative !important;
    width: 100% !important;
  }

  & .element-MOBILE-instance {
    left: unset !important;
  }

  & .one-MOBILE-instance {
    height: 334px !important;
    left: 9984px !important;
    top: -8807px !important;
    width: 267px !important;
  }

  & .design-component-instance-node {
    height: 465px !important;
    left: 9626px !important;
    top: -8806px !important;
    width: 370px !important;
  }

  & .MOBILE-5 {
    height: 406px !important;
    left: 9386px !important;
    top: -8796px !important;
    width: 323px !important;
  }

  & .frame-2 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    gap: 20px;
    height: 30px;
    position: relative;
    width: 100%;
  }

  & .TEAM-RZD-RU {
    height: 30.13px;
    margin-bottom: -0.13px;
    position: relative;
    width: 168.62px;
  }

  & .overlap-group-4 {
    background-image: url(https://psb-eta.vercel.app/rgd/mobile/img/vector-8.svg);
    background-size: 100% 100%;
    height: 30px;
    position: relative;
    width: 167px;
  }

  & .text-wrapper-6 {
    color: var(--variable-collection-WHITE-duplicate);
    font-family: "RussianRail G Pro-Medium", Helvetica;
    font-size: 10px;
    font-weight: 500;
    left: 14px;
    letter-spacing: 0.5px;
    line-height: 22px;
    position: absolute;
    text-align: center;
    top: 5px;
    white-space: nowrap;
    width: 139px;
  }

  & .view {
    flex: 1;
    flex-grow: 1;
    height: 16px;
    margin-right: -2px;
    position: relative;
  }

  & .text-wrapper-7 {
    color: var(--variable-collection-RZD-RED-duplicate);
    font-family: "Arial-Regular", Helvetica;
    font-size: 14px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: right;
    top: 0;
    width: 31px;
  }

  & .vector-2 {
    height: 8px;
    left: 106px;
    position: absolute;
    top: 6px;
    width: 2px;
  }
`;

export const SliderMobile = () => {
  return (
    <StyledSliderMobile>
      <ElementMobile
        MOBILEElementPng="https://psb-eta.vercel.app/rgd/mobile/img/01-png.png"
        MOBILEElementPng1="https://psb-eta.vercel.app/rgd/mobile/img/01-png-2.png"
        MOBILEElementPng2="https://psb-eta.vercel.app/rgd/mobile/img/01-png-2.png"
        MOBILEElementPngClassName="one-MOBILE-instance"
        MOBILEElementPngClassNameOverride="design-component-instance-node"
        MOBILEImg="https://psb-eta.vercel.app/rgd/mobile/img/01-png-2.png"
        MOBILEImgClassName="MOBILE-5"
        className="one-MOBILE"
        img="https://psb-eta.vercel.app/rgd/mobile/img/image-2.svg"
        img1="https://psb-eta.vercel.app/rgd/mobile/img/2x.png"
        overlapGroupClassName="element-MOBILE-instance"
        property1="one"
      />
      <div className="frame-2">
        <a className="TEAM-RZD-RU" href="team.rzd.ru" rel="noopener noreferrer" target="_blank">
          <div className="overlap-group-4">
            <div className="text-wrapper-6">TEAM.RZD.RU 6+</div>
          </div>
        </a>
        <div className="view">
          <div className="text-wrapper-7">вакансии</div>
          <img className="vector-2" alt="Vector" src="https://psb-eta.vercel.app/rgd/mobile/img/vector-7.svg" />
        </div>
      </div>
    </StyledSliderMobile>
  );
};
