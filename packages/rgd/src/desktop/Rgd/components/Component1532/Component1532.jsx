import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledComponent1532 = styled.div`
  height: 50px;

  & .IT-digital {
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    left: 13px;
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    position: absolute;
    top: 9px;
  }

  &.prop-2-two {
    width: 286px;
  }

  &.prop-2-three {
    width: 255px;
  }

  &.prop-2-IT-digital {
    width: 197px;
  }

  &.prop-2-one {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-69.svg);
    background-size: 100% 100%;
    position: relative;
    width: 119px;

    & .div-7 {
      color: var(--variable-collection-BLACK);
      font-family: var(---font-family);
      font-size: var(---font-size);
      font-style: var(---font-style);
      font-weight: var(---font-weight);
      left: 13px;
      letter-spacing: var(---letter-spacing);
      line-height: var(---line-height);
      position: absolute;
      top: 9px;
      width: 84px;
    }
  }

  &.prop-2-two .div-7 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-28.svg);
    background-size: 100% 100%;
    height: 22px;
    position: relative;
    width: 47px;
  }

  &.prop-2-three .div-7 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-28.svg);
    background-size: 100% 100%;
    height: 22px;
    position: relative;
    width: 47px;
  }

  &.prop-2-IT-digital .div-7 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-28.svg);
    background-size: 100% 100%;
    height: 22px;
    position: relative;
    width: 47px;
  }

  &.prop-2-two .IT-digital {
    color: var(--variable-collection-BLACK);
    width: 250px;
  }

  &.prop-2-three .IT-digital {
    color: var(--variable-collection-WHITE);
    width: 228px;
  }

  &.prop-2-IT-digital .IT-digital {
    color: var(--variable-collection-BLACK);
    width: 165px;
  }

  &.prop-2-one .IT-digital {
    color: var(--variable-collection-BLACK);
    width: 165px;
  }
`;

export const Component1532 = ({ prop, className, overlapGroupClassName }) => {
  return (
    <StyledComponent1532 className={`component-1532 prop-2-${prop} ${className}`}>
      <div className={`div-7 ${overlapGroupClassName}`}>
        {prop === "one" && <>ОФИС</>}

        {["IT-digital", "three", "two"].includes(prop) && (
          <div className="IT-digital">
            {prop === "IT-digital" && <>IT И DIGITAL</>}

            {prop === "two" && <>НАЧАЛО КАРЬЕРЫ</>}

            {prop === "three" && <>ПРОИЗВОДСТВО</>}
          </div>
        )}
      </div>
    </StyledComponent1532>
  );
};

Component1532.propTypes = {
  prop: PropTypes.oneOf(["two", "three", "IT-digital", "one"])
};
