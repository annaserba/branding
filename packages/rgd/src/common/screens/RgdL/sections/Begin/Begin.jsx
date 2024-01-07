import React from "react";
import { AboutCompany } from "../../../../components/AboutCompany/AboutCompany";
import { Component1820 } from "../../../../components/Component1820";
import { DivWrapper } from "../../../../components/DivWrapper";
import { ElementWrapper } from "../../../../components/ElementWrapper";
import { Raiting } from "../../../../components/Raiting";
import { TeamRzdRu } from "../../../../components/TeamRzdRu";
import { Five } from "../../../../icons/Five/Five";
import { Property101 } from "../../../../icons/Property101/Property101";
import { Six } from "../../../../icons/Six";
import styled from "styled-components";

const StyledBegin = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 64px;
  height: 1223.04px;
  position: relative;
  width: 100%;

  & .banner-slider {
    align-self: stretch;
    background-color: #f0f0f0;
    height: 558px;
    overflow: hidden;
    position: relative;
    width: 100%;

    & .overlap-8 {
      height: 558px;
      position: relative;
      width: 6250px;

      & .instance-6 {
        height: 432px !important;
        left: 438px !important;
        position: absolute !important;
        top: 45px !important;
        width: 669px !important;
      }

      & .view-20 {
        height: 558px;
        left: 0;
        position: absolute;
        top: 0;
        width: 6250px;

        & .component-1820-instance {
          left: 1250px !important;
          width: 1px !important;
        }

        & .overlap-group-4 {
          height: 558px;
          left: 16163px;
          position: absolute;
          top: -8821px;
          width: 3750px;

          & .image-8 {
            left: 1250px !important;
          }

          & .image-9 {
            left: 2500px !important;
          }
        }
      }

      & .view-21 {
        background: linear-gradient(180deg, rgb(240, 240, 240) 0%, rgba(217, 217, 217, 0) 100%);
        height: 558px;
        left: 0;
        position: absolute;
        top: 0;
        width: 438px;
      }

      & .image-10 {
        height: 42px;
        left: 1134px;
        position: absolute;
        top: 45px;
        width: 71px;
      }

      & .TEAM-RZD-RU-instance {
        left: 45px !important;
        position: absolute !important;
        top: 473px !important;
      }

      & .component-1822 {
        left: 241px !important;
        position: absolute !important;
        top: 483px !important;
      }

      & .image-11 {
        height: 41px;
        left: 1111px;
        position: absolute;
        top: 517px;
        width: 139px;
      }

      & .property-1-01 {
        height: 7px !important;
        left: 1157px !important;
        position: absolute !important;
        top: 551px !important;
        width: 93px !important;
      }

      & .component-1823 {
        left: 45px !important;
        position: absolute !important;
        top: 280px !important;
      }

      & .text-wrapper-37 {
        color: #000000;
        font-family: "RussianRail G Pro-Regular", Helvetica;
        font-size: 75px;
        font-weight: 400;
        left: 45px;
        letter-spacing: 3.75px;
        line-height: 72.7px;
        position: absolute;
        top: 40px;
        width: 375px;
      }
    }
  }

  & .raiting-instance {
    align-self: stretch !important;
    flex: 0 0 auto !important;
    width: 100% !important;

    & .instance-5-instance {
      height: 28px !important;
      left: 9px !important;
      position: absolute !important;
      top: 8px !important;
      width: 201px !important;
    }
  }

  & .about-company-instance {
    align-self: stretch !important;
    height: 497.04px !important;
    margin-bottom: -39.08px !important;
    width: 100% !important;
  }
`;

export const Begin = () => {
  return (
    <StyledBegin>
      <div className="banner-slider">
        <div className="overlap-8">
          <Six className="instance-6" />
          <div className="view-20">
            <Component1820 img="https://psb-eta.vercel.app/rgd/desktop/img/25.svg" prop="one" />
            <Component1820 className="component-1820-instance" img1="https://psb-eta.vercel.app/rgd/desktop/img/29.png" prop="two" />
            <div className="overlap-group-4">
              <Component1820 img2="https://psb-eta.vercel.app/rgd/desktop/img/26.png" prop="three" />
              <Component1820 ITDigital="https://psb-eta.vercel.app/rgd/desktop/img/26.png" className="image-8" prop="IT-digital" />
              <Component1820 className="image-9" img3="https://psb-eta.vercel.app/rgd/desktop/img/26.png" prop="four" />
            </div>
          </div>
          <div className="view-21" />
          <img className="image-10" alt="Image" src="https://psb-eta.vercel.app/rgd/desktop/img/3.png" />
          <TeamRzdRu
            className="TEAM-RZD-RU-instance"
            href="http://team.rzd.ru?utm_source=rzd&utm_medium=hh_ru&utm_campaign=landing"
            prop="one"
          />
          <ElementWrapper className="component-1822" prop="one" />
          <img className="image-11" alt="Image" src="https://psb-eta.vercel.app/rgd/desktop/img/1-2.svg" />
          <Property101 className="property-1-01" />
          <DivWrapper className="component-1823" prop="one" />
          <div className="text-wrapper-37">
            ДЛЯ ЛЮДЕЙ
            <br />
            ДЕЛА
          </div>
        </div>
      </div>
      <Raiting className="raiting-instance" icon={<Five className="instance-5-instance" />} />
      <AboutCompany className="about-company-instance" />
    </StyledBegin>
  );
};