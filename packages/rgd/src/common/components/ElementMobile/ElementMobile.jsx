import PropTypes from "prop-types";
import React from "react";
import { Five } from "../../icons/Five/Five";
import { IconComponentNode } from "../../icons/IconComponentNode";
import { Six } from "../../icons/Six";
import { Mobile } from "../Mobile";
import { PropertyWrapper } from "../PropertyWrapper";
import styled from "styled-components";

const StyledElementMobile = styled.div`
  background-color: #f0f0f0;
  height: 472px;
  overflow: hidden;
  width: 295px;

  & .overlap-group {
    height: 472px;
    left: -296px;
    position: relative;
    width: 1475px;
  }

  & .class {
    height: 165px !important;
    left: 20px !important;
    position: absolute !important;
    top: 227px !important;
    width: 255px !important;
  }

  & .class-2 {
    height: 165px !important;
    left: 316px !important;
    position: absolute !important;
    top: 227px !important;
    width: 255px !important;
  }

  & .div {
    height: 472px;
    left: 0;
    position: absolute;
    top: 0;
    width: 1475px;
  }

  & .class-3 {
    height: 331px !important;
    left: -3254px !important;
    top: -9159px !important;
  }

  & .class-4 {
    left: 0 !important;
    overflow: hidden !important;
    position: absolute !important;
    top: 0 !important;
  }

  & .class-5 {
    left: 0 !important;
    position: absolute !important;
    top: 0 !important;
  }

  & .class-6 {
    left: 1px !important;
    width: 294px !important;
  }

  & .class-7 {
    width: 1px !important;
  }

  & .MOBILE-instance {
    left: 295px !important;
    position: absolute !important;
    top: 0 !important;
  }

  & .class-8 {
    left: 590px !important;
    position: absolute !important;
    top: 0 !important;
  }

  & .class-9 {
    left: 590px !important;
    overflow: hidden !important;
    position: absolute !important;
    top: 0 !important;
  }

  & .instance-node {
    left: 885px !important;
    overflow: hidden !important;
    position: absolute !important;
    top: 0 !important;
  }

  & .MOBILE-2 {
    left: 1180px !important;
    overflow: hidden !important;
    position: absolute !important;
    top: 0 !important;
  }

  & .text-wrapper-2 {
    color: #000000;
    font-family: "RussianRail G Pro-Regular", Helvetica;
    font-size: 45px;
    font-weight: 400;
    left: 319px;
    letter-spacing: 2.25px;
    line-height: 43.6px;
    position: absolute;
    top: 19px;
    width: 244px;
  }

  & .img {
    position: absolute;
  }

  & .MOBILE-3 {
    height: 22px;
    left: 318px;
    position: absolute;
    top: 160px;
    width: 258px;
  }

  & .text-wrapper-3 {
    color: #000000;
    font-family: var(--MOBILE-01-font-family);
    font-size: var(--MOBILE-01-font-size);
    font-style: var(--MOBILE-01-font-style);
    font-weight: var(--MOBILE-01-font-weight);
    left: 0;
    letter-spacing: var(--MOBILE-01-letter-spacing);
    line-height: var(--MOBILE-01-line-height);
    position: absolute;
    top: -1px;
    width: 258px;
  }

  & .img-2 {
    height: 24px;
    left: 468px;
    position: absolute;
    top: 448px;
    width: 123px;
  }

  & .instance-2 {
    height: 7px !important;
    left: 494px !important;
    position: absolute !important;
    top: 465px !important;
    width: 97px !important;
  }

  & .instance-5 {
    height: 7px !important;
    left: 198px !important;
    position: absolute !important;
    top: 465px !important;
    width: 97px !important;
  }

  & .text-wrapper-4 {
    color: #000000;
    font-family: "RussianRail G Pro-Regular", Helvetica;
    font-size: 45px;
    font-weight: 400;
    left: 23px;
    letter-spacing: 2.25px;
    line-height: 43.6px;
    position: absolute;
    top: 19px;
    width: 244px;
  }

  & .img-3 {
    height: 30px;
    left: 224px;
    position: absolute;
    top: 20px;
    width: 51px;
  }

  & .MOBILE-4 {
    left: 22px !important;
    position: absolute !important;
    top: 160px !important;
  }

  & .property-1-0-one {
    height: 24px;
    left: 172px;
    top: 448px;
    width: 123px;
  }

  & .property-1-0-two {
    height: 30px;
    left: 520px;
    top: 20px;
    width: 51px;
  }
`;

export const ElementMobile = ({
  property1,
  className,
  overlapGroupClassName,
  MOBILEElementPng = "https://psb-eta.vercel.app/rgd/mobile/img/01-png-1.png",
  MOBILEImg = "https://psb-eta.vercel.app/rgd/mobile/img/05-png-2.png",
  MOBILEElementPngClassName,
  MOBILEElementPng1 = "https://psb-eta.vercel.app/rgd/mobile/img/05-png-2.png",
  MOBILEElementPngClassNameOverride,
  MOBILEElementPng2 = "https://psb-eta.vercel.app/rgd/mobile/img/05-png-2.png",
  MOBILEImgClassName,
  img = "https://psb-eta.vercel.app/rgd/mobile/img/1.svg",
  img1 = "https://psb-eta.vercel.app/rgd/mobile/img/3.png",
}) => {
  return (
    <StyledElementMobile className={`element-MOBILE ${className}`}>
      <div className={`overlap-group ${overlapGroupClassName}`}>
        <Six
          className={`${property1 === "one" ? "class" : "class-2"}`}
          color={property1 === "one" ? "#E21A1A" : "#F37E00"}
        />
        <div className="div">
          <Mobile
            className={`${property1 === "two" ? "class-4" : "class-5"}`}
            elementPng={MOBILEElementPng}
            elementPngClassName={`${property1 === "two" && "class-3"}`}
            property1="one"
          />
          <Mobile
            className="MOBILE-instance"
            elementPngClassName={`${property1 === "two" ? "class-6" : "class-7"}`}
            img={property1 === "two" ? "https://psb-eta.vercel.app/rgd/mobile/img/02-png-2.png" : "https://psb-eta.vercel.app/rgd/mobile/img/02-png-3.png"}
            property1="two"
          />
          <Mobile
            className={`${property1 === "two" ? "class-8" : "class-9"}`}
            elementPng1={MOBILEImg}
            elementPngClassName={MOBILEElementPngClassName}
            property1="three"
          />
          <Mobile
            className="instance-node"
            elementPng2={MOBILEElementPng1}
            elementPngClassName={MOBILEElementPngClassNameOverride}
            property1="IT"
          />
          <Mobile
            className="MOBILE-2"
            elementPng3={MOBILEElementPng2}
            elementPngClassName={MOBILEImgClassName}
            property1="four"
          />
        </div>
        {property1 === "two" && (
          <div className="text-wrapper-2">
            ДЛЯ ЛЮДЕЙ
            <br />
            ДЕЛА
          </div>
        )}

        <img className={`img property-1-0-${property1}`} alt="Img" src={property1 === "two" ? "https://psb-eta.vercel.app/rgd/mobile/img/3.png" : img} />
        {property1 === "two" && (
          <>
            <div className="MOBILE-3">
              <div className="text-wrapper-3">Работай с уверенностью</div>
            </div>
            <img className="img-2" alt="Img" src="https://psb-eta.vercel.app/rgd/mobile/img/1.svg" />
            <IconComponentNode className="instance-2" />
          </>
        )}

        {property1 === "one" && (
          <>
            <Five className="instance-5" />
            <div className="text-wrapper-4">
              ДЛЯ ЛЮДЕЙ
              <br />
              ДЕЛА
            </div>
            <img className="img-3" alt="Img" src={img1} />
            <PropertyWrapper className="MOBILE-4" property1="one" />
          </>
        )}
      </div>
    </StyledElementMobile>
  );
};

ElementMobile.propTypes = {
  property1: PropTypes.oneOf(["two", "one"]),
  MOBILEElementPng: PropTypes.string,
  MOBILEImg: PropTypes.string,
  MOBILEElementPng1: PropTypes.string,
  MOBILEElementPng2: PropTypes.string,
  img: PropTypes.string,
  img1: PropTypes.string,
};
