import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledComponent1540 = styled.div`
  height: 57px;
  position: relative;
  width: 326px;

  & .text-wrapper-6 {
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

export const Component1540 = ({ prop, className }) => {
  return (
    <StyledComponent1540 className={`component-1540 ${className}`}>
      <div className="text-wrapper-6">
        Есть работа
        <br />
        по всей стране
      </div>
    </StyledComponent1540>
  );
};

Component1540.propTypes = {
  prop: PropTypes.oneOf(["one"])
};
