import React from "react";
import { ConcreteComponentNode } from "../../../../components/ConcreteComponentNode";
import { DivWrapper } from "../../../../components/DivWrapper";
import styled from "styled-components";

const StyledVectorsMobile = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 584px;
  position: relative;
  width: 100%;

  & .text-wrapper-23 {
    color: #000000;
    font-family: "RussianRail G Pro-Regular", Helvetica;
    font-size: 32px;
    font-weight: 400;
    letter-spacing: 1.6px;
    line-height: 31px;
    margin-top: -1px;
    position: relative;
    width: fit-content;
  }

  & .MOBILE-7 {
    align-self: stretch;
    background-color: #ffffff;
    flex: 1;
    flex-grow: 1;
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  & .overlap-group-wrapper {
    height: 338px;
    left: 15px;
    position: absolute;
    top: 177px;
    width: 278px;
  }

  & .overlap-group-5 {
    height: 338px;
    position: relative;
  }

  & .flexcontainer-wrapper {
    height: 338px;
    left: 0;
    position: absolute;
    top: 0;
    width: 278px;
  }

  & .flexcontainer-i {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 338px;
    position: relative;
    top: -1px;
    width: 278px;
  }

  & .text-i {
    align-self: stretch;
    color: var(--variable-collection-BLACK-duplicate);
    font-family: var(--MOBILE-01-font-family);
    font-size: var(--MOBILE-01-font-size);
    font-style: var(--MOBILE-01-font-style);
    font-weight: var(--MOBILE-01-font-weight);
    letter-spacing: var(--MOBILE-01-letter-spacing);
    line-height: var(--MOBILE-01-line-height);
    position: relative;
  }

  & .text-wrapper-24 {
    color: #000000;
    font-family: var(--MOBILE-01-font-family);
    font-size: var(--MOBILE-01-font-size);
    font-style: var(--MOBILE-01-font-style);
    font-weight: var(--MOBILE-01-font-weight);
    letter-spacing: var(--MOBILE-01-letter-spacing);
    line-height: var(--MOBILE-01-line-height);
  }

  & .MOBILE-8 {
    left: 0 !important;
    position: absolute !important;
    top: 321px !important;
  }

  & .MOBILE-9 {
    left: 16px !important;
    position: absolute !important;
    top: 0 !important;
  }

  & .MOBILE-10 {
    background-image: url(https://psb-eta.vercel.app/rgd/mobile/img/vector-4.svg) !important;
  }

  & .MOBILE-11 {
    left: 15px !important;
    position: absolute !important;
    top: 54px !important;
  }

  & .MOBILE-12 {
    background-image: url(https://psb-eta.vercel.app/rgd/mobile/img/vector-3.svg) !important;
  }

  & .MOBILE-13 {
    left: 120px !important;
    position: absolute !important;
    top: 54px !important;
  }

  & .MOBILE-14 {
    background-image: url(https://psb-eta.vercel.app/rgd/mobile/img/vector-2.svg) !important;
  }

  & .MOBILE-15 {
    left: 15px !important;
    position: absolute !important;
    top: 108px !important;
  }

  & .MOBILE-16 {
    background-image: url(https://psb-eta.vercel.app/rgd/mobile/img/vector-1.svg) !important;
  }
`;

export const VectorsMobile = () => {
  return (
    <StyledVectorsMobile>
      <div className="text-wrapper-23">/ РАБОТА ДЛЯ КАЖДОГО</div>
      <div className="MOBILE-7">
        <div className="overlap-group-wrapper">
          <div className="overlap-group-5">
            <div className="flexcontainer-wrapper">
              <div className="flexcontainer-i">
                <p className="text-i">
                  <span className="text-wrapper-24">
                    Российские железные дороги – это не только поезда.
                    <br />
                  </span>
                </p>
                <p className="text-i">
                  <span className="text-wrapper-24">
                    Мы участвуем в масштабных стратегических проектах, развиваем регионы, строим важнейшие объекты
                    инфраструктуры – пути и тоннели, мосты и вокзалы, жилые дома и школы, поликлиники и больницы.
                    <br />
                  </span>
                </p>
                <p className="text-i">
                  <span className="text-wrapper-24">
                    Наша работа – это вклад в будущее каждого из нас, в процветание общества и всей страны.
                    <br />
                  </span>
                </p>
                <p className="text-i">
                  <span className="text-wrapper-24">Присоединяйся к команде и работай с уверенностью!</span>
                </p>
              </div>
            </div>
            <DivWrapper className="MOBILE-8" property1="one" vector="https://psb-eta.vercel.app/rgd/mobile/img/vector-5.svg" />
          </div>
        </div>
        <ConcreteComponentNode className="MOBILE-9" overlapGroupClassName="MOBILE-10" property1="one" />
        <ConcreteComponentNode className="MOBILE-11" overlapGroupClassName="MOBILE-12" property1="two" />
        <ConcreteComponentNode className="MOBILE-13" overlapGroupClassName="MOBILE-14" property1="IT-digital" />
        <ConcreteComponentNode className="MOBILE-15" overlapGroupClassName="MOBILE-16" property1="three" />
      </div>
    </StyledVectorsMobile>
  );
};
