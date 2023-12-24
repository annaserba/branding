import React from "react";
import styled from "styled-components";

const StyledThree = styled.svg`
  & .path {
    stroke: #bebebe;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }

  &.three {
    fill: none;
    height: 118;
    width: 108;
  }
`;

export const Three = ({ className }) => {
  return (
    <StyledThree
      className={`three ${className}`}
      viewBox="0 0 108 118"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M63.1072 29.874L56.7189 36.2623L29.6262 63.355V102.694L16.0519 116.269"
      />
      <path
        className="path"
        d="M81.8303 48.601L55.1762 21.944V4.74567L51.8173 1.38965"
      />
      <path
        className="path"
        d="M69.1543 48.7009L62.0124 41.5619C60.6073 40.1564 59.818 38.2503 59.818 36.2629C59.818 34.2755 60.6073 32.3694 62.0124 30.9639"
      />
      <path className="path" d="M29.627 102.696V109.479" />
      <path
        className="path"
        d="M23.0854 40.2257H36.8982L55.1769 21.9441H93.062L94.216 20.79"
      />
      <path
        className="path"
        d="M95.8198 32.5537L87.8712 40.5022H73.7317"
      />
      <path
        className="path"
        d="M55.1761 9.78613H65.6594L97.4565 43.7882H107.057"
      />
      <path className="path" d="M55.1768 12.3438H46.6395" />
      <path
        className="path"
        d="M29.6268 63.3558L23.0854 56.8144V4.03613"
      />
      <path
        className="path"
        d="M33.9799 22.6475L44.2276 32.8952V39.2158"
      />
      <path className="path" d="M23.0848 52.2129H1.91516" />
      <path
        className="path"
        d="M19.5994 52.0285L9.45769 41.8867H0.219727"
      />
      <path
        className="path"
        d="M55.1759 27.8323C58.4276 27.8323 61.0637 25.1962 61.0637 21.9444C61.0637 18.6927 58.4276 16.0566 55.1759 16.0566C51.9241 16.0566 49.2881 18.6927 49.2881 21.9444C49.2881 25.1962 51.9241 27.8323 55.1759 27.8323Z"
        fill="#E6E6E6"
        stroke="#BEBEBE"
        strokeMiterlimit="10"
        strokeWidth="2.35512"
      />
    </StyledThree>
  );
};
