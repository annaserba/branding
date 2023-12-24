import React from "react";
import styled from "styled-components";

const StyledIconComponentNode = styled.svg`
  &.icon-component-node {
    fill: none;
    height: 94;
    width: 93;
  }

  & .path {
    stroke: #BEBEBE;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }
`;

export const IconComponentNode = ({ className }) => {
  return (
    <StyledIconComponentNode
      className={`icon-component-node ${className}`}
      viewBox="0 0 93 94"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M80.0234 24.5903V0.629883"
      />
      <path
        className="path"
        d="M89.5349 24.5938H0.799805"
      />
      <path
        className="path"
        d="M69.502 41.3561H78.6281L91.4929 28.4912"
      />
      <path
        className="path"
        d="M69.5025 41.3555L29.5684 81.2896C28.6659 82.1917 27.9499 83.2629 27.4615 84.4419C26.973 85.6208 26.7216 86.8844 26.7217 88.1606V93.5273"
      />
      <path className="path" d="M69.502 41.3554V24.5898" />
      <path
        className="path"
        d="M6.01074 44.4385C6.01074 41.8619 7.03429 39.391 8.85618 37.5691C10.6781 35.7472 13.1491 34.7236 15.7256 34.7236H23.58"
      />
      <path
        className="path"
        d="M23.5801 0.629883V68.1453L33.1478 77.713"
      />
      <path
        className="path"
        d="M11.1807 84.1355H22.6972C23.9734 84.1356 25.237 83.8842 26.4159 83.3958C27.5949 82.9073 28.6661 82.1914 29.5683 81.2888L32.3385 78.5186"
      />
      <path
        className="path"
        d="M56.587 30.4807C59.8388 30.4807 62.4748 27.8446 62.4748 24.5929C62.4748 21.3411 59.8388 18.7051 56.587 18.7051C53.3353 18.7051 50.6992 21.3411 50.6992 24.5929C50.6992 27.8446 53.3353 30.4807 56.587 30.4807Z"
        fill="#E6E6E6"
      />
    </StyledIconComponentNode>
  );
};
