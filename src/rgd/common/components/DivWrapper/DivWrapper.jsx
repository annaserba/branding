import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledDivWrapper = styled.div`
  height: 57px;
  position: relative;
  width: 326px;

  & .text-wrapper-3 {
    color: #000000;
    font-family: "Arial-Regular", Helvetica;
    font-size: 24px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: -1px;
    width: 326px;
  }
`;

export const DivWrapper = ({ prop, className }) => {
  return (
    <StyledDivWrapper className={`div-wrapper ${className}`}>
      <div className="text-wrapper-3">
        Есть работа
        <br />
        по всей стране
      </div>
    </StyledDivWrapper>
  );
};

DivWrapper.propTypes = {
  prop: PropTypes.oneOf(["one"])
};
