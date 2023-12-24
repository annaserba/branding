import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledComponent1533 = styled.div`
  height: 20px;
  width: 213px;

  & .div-3 {
    height: 23px;
    position: relative;
    width: 215px;
  }

  & .text-wrapper-3 {
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

  & .vector {
    height: 12px;
    left: 207px;
    position: absolute;
    top: 6px;
    width: 7px;
  }
`;

export const Component1533 = ({ prop, className }) => {
  return (
    <StyledComponent1533 className={`component-1533 ${className}`}>
      <div className="div-3">
        <div className="text-wrapper-3">посмотреть вакансии</div>
        <img className="vector" alt="Vector" src="https://psb-eta.vercel.app/rgd/desktop/vector-70.svg" />
      </div>
    </StyledComponent1533>
  );
};

Component1533.propTypes = {
  prop: PropTypes.oneOf(["one"])
};
