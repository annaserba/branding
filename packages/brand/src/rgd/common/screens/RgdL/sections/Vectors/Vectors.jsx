import React from "react";
import { Component1843 } from "../../../../components/Component1843";
import { Tab } from "../../../../components/Tab/Tab";
import { Tab4 } from "../../../../components/Tab4/Tab4";
import { TabActive } from "../../../../components/TabActive/TabActive";
import { TabWrapper } from "../../../../components/TabWrapper/TabWrapper";
import styled from "styled-components";

const StyledVectors = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 70px;
  position: relative;

  & .text-wrapper-47 {
    color: var(--variable-collection-BLACK);
    font-family: "RussianRail G Pro-Regular", Helvetica;
    font-size: 50px;
    font-weight: 400;
    letter-spacing: 2.5px;
    line-height: 48.5px;
    margin-top: -1px;
    position: relative;
    width: 668px;
  }

  & .view-22 {
    height: 260px;
    position: relative;
    width: 1169px;
  }

  & .tabs {
    align-items: flex-start;
    display: inline-flex;
    flex-direction: column;
    gap: 20px;
    left: 0;
    position: absolute;
    top: 0;
  }

  & .tab-2 {
    position: relative !important;
  }

  & .tab-active-1 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-22.svg) !important;
    height: 50px !important;
    width: 256px !important;
  }

  & .tab-instance {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-21.svg) !important;
  }

  & .tab-3 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-20.svg) !important;
    height: 50px !important;
    width: 198px !important;
  }

  & .tab-4-instance {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-19.svg) !important;
    height: 50px !important;
    width: unset !important;
  }

  & .component-1843-instance {
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

  & .text-wrapper-48 {
    color: #000000;
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
  }
`;

export const Vectors = () => {
  return (
    <StyledVectors>
      <div className="text-wrapper-47">/ РАБОТА ДЛЯ КАЖДОГО</div>
      <div className="view-22">
        <div className="tabs">
          <TabActive className="tab-2" overlapClassName="tab-active-1" />
          <Tab className="tab-instance" />
          <TabWrapper className="tab-2" overlapClassName="tab-3" />
          <Tab4 className="tab-2" overlapClassName="tab-4-instance" />
        </div>
        <Component1843 className="component-1843-instance" prop="one" vector="https://psb-eta.vercel.app/rgd/desktop/img/vector-18.svg" />
        <div className="flexcontainer-wrapper">
          <div className="flexcontainer-i">
            <p className="text-i">
              <span className="text-wrapper-48">
                Российские железные дороги – это не только поезда.
                <br />
              </span>
            </p>
            <p className="text-i">
              <span className="text-wrapper-48">
                Мы участвуем в масштабных стратегических проектах, развиваем регионы, строим важнейшие объекты
                инфраструктуры – пути и тоннели, мосты
и вокзалы, жилые дома и школы, поликлиники и больницы.
                <br />
              </span>
            </p>
            <p className="text-i">
              <span className="text-wrapper-48">
                Наша работа – это вклад в будущее каждого из нас, в процветание общества и всей страны.
                <br />
              </span>
            </p>
            <p className="text-i">
              <span className="text-wrapper-48">Присоединяйся к команде и работай с уверенностью!</span>
            </p>
          </div>
        </div>
      </div>
    </StyledVectors>
  );
};