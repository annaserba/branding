import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledSix = styled.svg`
  &.path {
    fill: ${props => props.color};
  }
`;

export const Six = ({ color = "#E21A1A", className }) => {
  return (
    <span className={className}>
    <StyledSix
      fill="none"
      height="165"
      viewBox="0 0 255 165"
      width="255"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M99.5514 115.157L62.5223 164.515H37.731L74.7601 115.157H99.5514Z" />
      <path className="path" d="M78.5379 0L29.1618 65.8046H14.5007L63.8709 0H78.5379Z" />
      <path className="path" d="M255 65.793L205.575 131.616H199.988L249.406 65.793H255Z" />
      <path className="path" d="M103.769 33.0713L29.7107 131.787H0L74.0582 33.0713H103.769Z" />
      </StyledSix>
      </span>
  );
};

Six.propTypes = {
  color: PropTypes.string,
};
