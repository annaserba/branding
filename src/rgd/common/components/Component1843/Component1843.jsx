import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledComponent1843 = styled.div`
  height: 20px;
  width: 213px;

  & .div-2 {
    height: 23px;
    position: relative;
    width: 215px;
  }

  & .text-wrapper-17 {
    color: var(--variable-collection-RZD-WORKER);
    font-family: "Arial-Regular", Helvetica;
    font-size: 20px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: right;
    top: 0;
    white-space: nowrap;
  }

  & .vector-2 {
    height: 12px;
    left: 207px;
    position: absolute;
    top: 6px;
    width: 7px;
  }
`;

export const Component1843 = ({ prop, className, vector = "https://psb-eta.vercel.app/rgd/desktop/img/vector-36.svg" }) => {
  return (
    <StyledComponent1843 className={`component-1843 ${className}`}>
      <div className="div-2">
        <div className="text-wrapper-17">посмотреть вакансии</div>
        <img className="vector-2" alt="Vector" src={vector} />
      </div>
    </StyledComponent1843>
  );
};

Component1843.propTypes = {
  prop: PropTypes.oneOf(["one"]),
  vector: PropTypes.string,
};
