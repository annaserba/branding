import React from "react";
import styled from "styled-components";

const StyledTabActive = styled.div`
  height: 50px;
  width: 255px;

  & .overlap-2 {
    background-image: url(../img/vector-32.svg);
    background-size: 100% 100%;
    height: 558px;
    position: relative;
    width: 6250px;
  }

  & .text-wrapper-14 {
    color: var(--variable-collection-WHITE);
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    left: 13px;
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    position: absolute;
    top: 9px;
    width: 228px;
  }
`;

export const TabActive = ({ className, overlapClassName }) => {
  return (
    <StyledTabActive className={`tab-active ${className}`}>
      <div className={`overlap-2 ${overlapClassName}`}>
        <div className="text-wrapper-14">ПРОИЗВОДСТВО</div>
      </div>
    </StyledTabActive>
  );
};
