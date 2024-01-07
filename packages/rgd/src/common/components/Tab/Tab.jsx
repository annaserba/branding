import React from "react";
import styled from "styled-components";

const StyledTab = styled.div`
  background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-33.svg);
  background-size: 100% 100%;
  height: 50px;
  position: relative;
  width: 119px;

  & .text-wrapper-15 {
    color: var(--variable-collection-BLACK);
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    left: 13px;
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    position: absolute;
    top: 9px;
    width: 84px;
  }
`;

export const Tab = ({ className }) => {
  return (
    <StyledTab className={`tab ${className}`}>
      <div className="text-wrapper-15">ОФИС</div>
    </StyledTab>
  );
};
