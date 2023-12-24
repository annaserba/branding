import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { NamecandidateName2Score101 } from "../../icons/NamecandidateName2Score101/NamecandidateName2Score101";
import { Property101 } from "../../icons/Property101/Property101";
import { Component1537 } from "../Component1537/Component1537";
import { Component1539 } from "../Component1539";
import { Component1540 } from "../Component1540";
import { TeamRzdRu } from "../TeamRzdRu";

const StyledComponent1541 = styled.div`
  background-color: #f0f0f0;
  height: 558px;
  overflow: hidden;
  width:100%;

  & .overlap-group {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-28.svg);
    background-size: 100% 100%;
    height: 22px;
    position: relative;
    width: 47px;
  }

  & .instance-2 {
    height: 432px !important;
    left: 438px !important;
    position: absolute !important;
    top: 45px !important;
    width: 669px !important;
  }

  & .div-4 {
    height: 558px;
    left: 0;
    position: absolute;
    top: 0;
    width:100%;
  }

  & .overlap-2 {
    height: 558px;
    left: 0;
    position: absolute;
    top: 0;
    width: 1251px;
  }

  & .component-1537-instance {
    left: 1250px !important;
    width: 1px !important;
  }

  & .overlap-group-2 {
    height: 558px;
    left: 6706px;
    position: absolute;
    top: -8843px;
    width: 3750px;
  }

  & .design-component-instance-node {
    left: 1250px !important;
  }

  & .component-1537-2 {
    left: 2500px !important;
  }

  & .div-5 {
    background: linear-gradient(180deg, rgb(240, 240, 240) 0%, rgba(217, 217, 217, 0) 100%);
    height: 558px;
    left: 0;
    position: absolute;
    top: 0;
    width: 438px;
  }

  & .img-2 {
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

  & .component-1539-instance {
    left: 241px !important;
    position: absolute !important;
    top: 483px !important;
  }

  & .img-3 {
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

  & .component-1540-instance {
    left: 45px !important;
    position: absolute !important;
    top: 280px !important;
  }

  & .text-wrapper-7 {
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
`;

export const Component1541 = ({
  prop,
  className,
  overlapGroupClassName,
  component1537Img = "https://psb-eta.vercel.app/rgd/desktop/img/21.svg",
  overlapGroupClassNameOverride,
  component1537Img1 = "https://psb-eta.vercel.app/rgd/desktop/img/17.png",
  component1537ItDigital = "https://psb-eta.vercel.app/rgd/desktop/img/17.png",
  component1537Img2 = "https://psb-eta.vercel.app/rgd/desktop/img/17.png",
  divClassName
}) => {
  return (
    <StyledComponent1541 className={`component-1541 ${className}`}>
      <div className={`overlap-group ${overlapGroupClassName}`}>
        <NamecandidateName2Score101 className="instance-2" />
        <div className="div-4">
          <div className="overlap-2">
            <Component1537 img={component1537Img} prop="one" />
            <Component1537 className="component-1537-instance" img1="https://psb-eta.vercel.app/rgd/desktop/img/20.png" prop="two" />
          </div>
          <div className={`overlap-group-2 ${overlapGroupClassNameOverride}`}>
            <Component1537 img2={component1537Img1} prop="three" />
            <Component1537
              ITDigital={component1537ItDigital}
              className="design-component-instance-node"
              prop="IT-digital"
            />
            <Component1537 className="component-1537-2" img3={component1537Img2} prop="four" />
          </div>
        </div>
        <div className={`div-5 ${divClassName}`} />
        <img className="img-2" alt="Img" src="https://psb-eta.vercel.app/rgd/desktop/img/3.png" />
        <TeamRzdRu
          className="TEAM-RZD-RU-instance"
          href="http://team.rzd.ru?utm_source=rzd&utm_medium=hh_ru&utm_campaign=landing"
          prop="one"
        />
        <Component1539 className="component-1539-instance" prop="one" />
        <img className="img-3" alt="Img" src="https://psb-eta.vercel.app/rgd/desktop/img/2-2.svg" />
        <Property101 className="property-1-01" />
        <Component1540 className="component-1540-instance" prop="one" />
        <div className="text-wrapper-7">
          ДЛЯ ЛЮДЕЙ
          <br />
          ДЕЛА
        </div>
      </div>
    </StyledComponent1541>
  );
};

Component1541.propTypes = {
  prop: PropTypes.oneOf(["one"]),
  component1537Img: PropTypes.string,
  component1537Img1: PropTypes.string,
  component1537ItDigital: PropTypes.string,
  component1537Img2: PropTypes.string
};