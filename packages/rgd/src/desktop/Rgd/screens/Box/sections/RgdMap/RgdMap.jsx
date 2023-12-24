import React from "react";
import styled from "styled-components";
import { Div } from "./sections/Div";
import { Element } from "./sections/Element";
import { SectionComponentNode } from "./sections/SectionComponentNode/SectionComponentNode";

const StyledRgdMap = styled.div`
  height: 768px;
  left: 49px;
  width: 100%;
  position: relative;

  & .overlap-6 {
    height: 768px;
    position: relative;
    width: 1160px;
  }

  & .text-wrapper-24 {
    color: #000000;
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    left: 3px;
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
    position: absolute;
    top: 108px;
    width: 469px;
  }

  & .text-wrapper-25 {
    color: var(--variable-collection-BLACK);
    font-family: "RussianRail G Pro-Regular", Helvetica;
    font-size: 50px;
    font-weight: 400;
    left: 0;
    letter-spacing: 2.5px;
    line-height: 48.5px;
    position: absolute;
    top: 0;
    width: 664px;
  }
`;

export const RgdMap = () => {
  return (
    <StyledRgdMap>
      <div className="overlap-6">
        <Element />
        <Div />
        <SectionComponentNode />
        <p className="text-wrapper-24">
          Работаем в масштабах большой страны.
          <br />
          Нажмите на дорогу, чтобы посмотреть вакансии.
        </p>
        <div className="text-wrapper-25">
          / ГЕОГРАФИЯ
          <br />
          ВАКАНСИЙ
        </div>
      </div>
    </StyledRgdMap>
  );
};