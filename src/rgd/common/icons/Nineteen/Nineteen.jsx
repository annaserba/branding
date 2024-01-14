import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledNineteen = styled.svg`
  & .path {
    stroke: ${props => props.color};
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }
`;

export const Nineteen = ({ color = "#BEBEBE", className }) => {
  return (
    <StyledNineteen
      className={`nineteen ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 45 32"
      width="45"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <path className="path" d="M19.2383 9.61133L40.1959 30.5719" />
      <path className="path" d="M19.2384 9.61133L11.7373 17.1124" />
      <path className="path" d="M13.3506 9.61166L5.79654 2.05762H0" />
      <path className="path" d="M10.5566 2.05762H16.3532L18.1254 3.82983" />
      <path
        className="path"
        d="M19.2383 9.61133H30.5193L34.6967 13.7887L37.3021 11.1863L41.1262 15.0105L32.8833 23.2563H20.8869"
      />
      <path className="path" d="M41.125 15.0107L44.1396 18.0253" />
      <path className="path" d="M38.6772 29.0508H29.4922" />
      <path
        className="path"
        d="M23.5225 5.57565L27.0551 2.04297L27.6439 2.63175C28.5588 3.54507 29.2846 4.62988 29.7796 5.82408C30.2747 7.01827 30.5293 8.2984 30.5289 9.59114"
      />
      <path
        className="path"
        d="M19.2384 15.5002C22.4901 15.5002 25.1262 12.8642 25.1262 9.61241C25.1262 6.36067 22.4901 3.72461 19.2384 3.72461C15.9866 3.72461 13.3506 6.36067 13.3506 9.61241C13.3506 12.8642 15.9866 15.5002 19.2384 15.5002Z"
        fill="#E6E6E6"
      />
    </StyledNineteen>
  );
};

Nineteen.propTypes = {
  color: PropTypes.string
};
