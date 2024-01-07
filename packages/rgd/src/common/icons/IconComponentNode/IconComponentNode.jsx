import React from "react";
import styled from "styled-components";

const StyledIconComponentNode = styled.svg`
  &.icon-component-node {
    fill: none;
    height: 7px;
    width: 97px;
  }

  & .path {
    fill: #f37e00;
  }
`;

export const IconComponentNode = ({ className }) => {
  return (
    <StyledIconComponentNode
      className={`icon-component-node ${className}`}
      viewBox="0 0 97 7"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M40.6772 7.25312V0.140625L18.7823 0.140625V7.25312L40.6772 7.25312Z" />
      <path className="path" d="M7.2981 7.25312L7.2981 0.140625L-0.000226974 0.140625L-0.000226974 7.25312H7.2981Z" />
      <path className="path" d="M59.447 7.25312V0.140625L52.1487 0.140625V7.25312H59.447Z" />
      <path className="path" d="M78.2241 7.25312V0.140625L70.9258 0.140625V7.25312H78.2241Z" />
      <path className="path" d="M97 7.25312V0.140625L89.7017 0.140625V7.25312H97Z" />
    </StyledIconComponentNode>
  );
};
