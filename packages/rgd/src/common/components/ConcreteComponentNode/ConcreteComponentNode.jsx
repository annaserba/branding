import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledConcreteComponentNode = styled.div`
  height: 39px;

  & .group {
    height: 39px;
  }

  & .overlap-group-3 {
    background-size: 100% 100%;
    height: 39px;
    position: relative;
  }

  & .div-2 {
    font-family: var(--MOBILE-font-family);
    font-size: var(--MOBILE-font-size);
    font-style: var(--MOBILE-font-style);
    font-weight: var(--MOBILE-font-weight);
    left: 13px;
    letter-spacing: var(--MOBILE-letter-spacing);
    line-height: var(--MOBILE-line-height);
    position: absolute;
    top: 9px;
    white-space: nowrap;
  }

  &.property-1-1-one {
    width: 189px;
  }

  &.property-1-1-IT-digital {
    width: 146px;
  }

  &.property-1-1-three {
    width: 210px;
  }

  &.property-1-1-two {
    width: 90px;
  }

  &.property-1-1-one .group {
    width: 191px;
  }

  &.property-1-1-IT-digital .group {
    width: 148px;
  }

  &.property-1-1-three .group {
    width: 212px;
  }

  &.property-1-1-two .group {
    width: 92px;
  }

  &.property-1-1-one .overlap-group-3 {
    background-image: url(https://psb-eta.vercel.app/rgd/mobile/img/vector-13.svg);
    width: 189px;
  }

  &.property-1-1-IT-digital .overlap-group-3 {
    background-image: url(https://psb-eta.vercel.app/rgd/mobile/img/vector-11.svg);
    width: 146px;
  }

  &.property-1-1-three .overlap-group-3 {
    background-image: url(https://psb-eta.vercel.app/rgd/mobile/img/vector-10.svg);
    width: 210px;
  }

  &.property-1-1-two .overlap-group-3 {
    background-image: url(https://psb-eta.vercel.app/rgd/mobile/img/vector-12.svg);
    width: 90px;
  }

  &.property-1-1-one .div-2 {
    color: var(--variable-collection-WHITE-duplicate);
  }

  &.property-1-1-IT-digital .div-2 {
    color: var(--variable-collection-BLACK-duplicate);
  }

  &.property-1-1-three .div-2 {
    color: var(--variable-collection-BLACK-duplicate);
  }

  &.property-1-1-two .div-2 {
    color: var(--variable-collection-BLACK-duplicate);
  }
`;

export const ConcreteComponentNode = ({ property1, className, overlapGroupClassName }) => {
  return (
    <StyledConcreteComponentNode className={`concrete-component-node property-1-1-${property1} ${className}`}>
      <div className="group">
        <div className={`overlap-group-3 ${overlapGroupClassName}`}>
          <div className="div-2">
            {property1 === "one" && <>ПРОИЗВОДСТВО</>}

            {property1 === "two" && <>ОФИС</>}

            {property1 === "IT-digital" && <>IT И DIGITAL</>}

            {property1 === "three" && <>НАЧАЛО КАРЬЕРЫ</>}
          </div>
        </div>
      </div>
    </StyledConcreteComponentNode>
  );
};

ConcreteComponentNode.propTypes = {
  property1: PropTypes.oneOf(["two", "three", "IT-digital", "one"]),
};
