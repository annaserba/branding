import React from "react";
import { Component1532 } from "../../../../components/Component1532";
import { Component1533 } from "../../../../components/Component1533";
import styled from "styled-components";

const StyledRgdVectors = styled.div`
  height: 378px;
  left: 49px;
  width: 100%;
  position: relative;

  & .view-20 {
    height: 260px;
    left: 0;
    position: absolute;
    top: 118px;
    width: 1169px;
  }

  & .component-1532-instance {
    left: 0 !important;
    position: absolute !important;
    top: 0 !important;
  }

  & .view-21 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-66.svg) !important;
    height: 50px !important;
    width: 256px !important;
  }

  & .view-22 {
    left: 0 !important;
    position: absolute !important;
    top: 70px !important;
  }

  & .view-23 {
    left: 0 !important;
    position: absolute !important;
    top: 140px !important;
  }

  & .view-24 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-68.svg) !important;
    height: 50px !important;
    width: 198px !important;
  }

  & .view-25 {
    left: 0 !important;
    position: absolute !important;
    top: 210px !important;
  }

  & .view-26 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-67.svg) !important;
    height: 50px !important;
    width: unset !important;
  }

  & .component-1533-instance {
    left: 409px !important;
    position: absolute !important;
    top: 205px !important;
  }

  & .flexcontainer-wrapper {
    height: 190px;
    left: 409px;
    position: absolute;
    top: 0;
    width: 760px;
  }

  & .flexcontainer-i {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 191px;
    position: relative;
    top: -1px;
    width: 712px;
  }

  & .text-i {
    align-self: stretch;
    color: var(--variable-collection-BLACK);
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
    position: relative;
  }

  & .text-wrapper-26 {
    color: #000000;
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
  }

  & .text-wrapper-27 {
    color: var(--variable-collection-BLACK);
    font-family: "RussianRail G Pro-Regular", Helvetica;
    font-size: 50px;
    font-weight: 400;
    left: 0;
    letter-spacing: 2.5px;
    line-height: 48.5px;
    position: absolute;
    top: 0;
    width: 668px;
  }
`;

export const RgdVectors = () => {
  return (
    <StyledRgdVectors>
      <div className="view-20">
        <Component1532 className="component-1532-instance" overlapGroupClassName="view-21" prop="three" />
        <Component1532 className="view-22" prop="one" />
        <Component1532 className="view-23" overlapGroupClassName="view-24" prop="IT-digital" />
        <Component1532 className="view-25" overlapGroupClassName="view-26" prop="two" />
        <Component1533 className="component-1533-instance" prop="one" />
        <div className="flexcontainer-wrapper">
          <div className="flexcontainer-i">
            <p className="text-i">
              <span className="text-wrapper-26">
                Российские железные дороги – это не только поезда.
                <br />
              </span>
            </p>
            <p className="text-i">
              <span className="text-wrapper-26">
                Мы участвуем в масштабных стратегических проектах, развиваем регионы, строим важнейшие объекты
                инфраструктуры – пути и тоннели, мостыи вокзалы, жилые дома и школы, поликлиники и больницы.
                <br />
              </span>
            </p>
            <p className="text-i">
              <span className="text-wrapper-26">
                Наша работа – это вклад в будущее каждого из нас, в процветание общества и всей страны.
                <br />
              </span>
            </p>
            <p className="text-i">
              <span className="text-wrapper-26">Присоединяйся к команде и работай с уверенностью!</span>
            </p>
          </div>
        </div>
      </div>
      <div className="text-wrapper-27">/ РАБОТА ДЛЯ КАЖДОГО</div>
    </StyledRgdVectors>
  );
};
