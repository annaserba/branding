import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledPropertyWrapper = styled.div`
  height: 22px;
  position: relative;
  width: 258px;

  & .text-wrapper {
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
`;

export const PropertyWrapper = ({ property1, className }) => {
  return (
    <StyledPropertyWrapper className={`property-wrapper ${className}`}>
      <p className="text-wrapper">Есть работа по всей стране</p>
    </StyledPropertyWrapper>
  );
};

PropertyWrapper.propTypes = {
  property1: PropTypes.oneOf(["one"])
};
