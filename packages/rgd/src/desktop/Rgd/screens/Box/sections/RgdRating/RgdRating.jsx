import React from "react";
import styled from "styled-components";
import { NamecandidateName4Score102 } from "../../../../icons/NamecandidateName4Score102";

const StyledRgdRating = styled.div`
  height: 88px;
  left: 402px;
  width: 100%;
  position: relative;

  & .element-11 {
    color: transparent;
    font-family: "Arial-Regular", Helvetica;
    font-size: 25px;
    font-weight: 400;
    left: 0;
    letter-spacing: 1.25px;
    line-height: 25px;
    position: absolute;
    text-align: center;
    top: 63px;
    white-space: nowrap;
  }

  & .text-wrapper-48 {
    color: #000000;
  }

  & .text-wrapper-49 {
    color: #999999;
  }

  & .II-MECTO {
    height: 55px;
    left: 81px;
    position: absolute;
    top: 0;
    width: 291px;
  }

  & .overlap-group-4 {
    height: 55px;
    position: relative;
  }

  & .icon-instance-node {
    height: 37px !important;
    left: 11px !important;
    position: absolute !important;
    top: 11px !important;
    width: 270px !important;
  }

  & .image-16 {
    height: 55px;
    left: 0;
    position: absolute;
    top: 0;
    width: 291px;
  }
`;

export const RgdRating = () => {
  return (
    <StyledRgdRating>
      <p className="element-11">
        <span className="text-wrapper-48">в рейтинге работодателей ВЦИОМ</span>
        <span className="text-wrapper-49">1</span>
      </p>
      <div className="II-MECTO">
        <div className="overlap-group-4">
          <NamecandidateName4Score102 className="icon-instance-node" />
          <img className="image-16" alt="Image" src="https://psb-eta.vercel.app/rgd/desktop/img/3.svg" />
        </div>
      </div>
    </StyledRgdRating>
  );
};
