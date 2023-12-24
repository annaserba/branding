import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledTwelve = styled.svg`
  & .path {
    stroke: ${props => props.color};
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }
`;

export const Twelve = ({ color = "#BEBEBE", className }) => {
  return (
    <StyledTwelve
      className={`twelve ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 45 32"
      width="45"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <path className="path" d="M19.2383 10.168L40.1959 31.1286" />
      <path className="path" d="M19.2384 10.168L11.7373 17.669" />
      <path className="path" d="M13.3506 10.1683L5.79654 2.61426H0" />
      <path className="path" d="M10.5566 2.61426H16.3532L18.1254 4.38647" />
      <path
        className="path"
        d="M19.2383 10.168H30.5193L34.6967 14.3454L37.3021 11.743L41.1262 15.5671L32.8833 23.813H20.8869"
      />
      <path className="path" d="M41.125 15.5674L44.1396 18.5819" />
      <path className="path" d="M38.6772 29.6074H29.4922" />
      <path
        className="path"
        d="M23.5225 6.13229L27.0551 2.59961L27.6439 3.18839C28.5588 4.10171 29.2846 5.18653 29.7796 6.38072C30.2747 7.57491 30.5293 8.85504 30.5289 10.1478"
      />
      <path
        className="path"
        d="M19.2384 16.0569C22.4901 16.0569 25.1262 13.4208 25.1262 10.1691C25.1262 6.91731 22.4901 4.28125 19.2384 4.28125C15.9866 4.28125 13.3506 6.91731 13.3506 10.1691C13.3506 13.4208 15.9866 16.0569 19.2384 16.0569Z"
        fill="#E6E6E6"
      />
    </StyledTwelve>
  );
};

Twelve.propTypes = {
  color: PropTypes.string
};
