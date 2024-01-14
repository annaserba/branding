import React from "react";
import styled from "styled-components";

const StyledTabWrapper = styled.div`
  height: 50px;
  width: 197px;

  & .IT-digital-wrapper {
    background-image: url(../img/vector-32.svg);
    background-size: 100% 100%;
    height: 558px;
    position: relative;
    width: 6250px;
  }

  & .IT-digital {
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
    width: 165px;
  }
`;

export const TabWrapper = ({ className, overlapClassName }) => {
  return (
    <StyledTabWrapper className={`tab-wrapper ${className}`}>
      <div className={`IT-digital-wrapper ${overlapClassName}`}>
        <div className="IT-digital">IT И DIGITAL</div>
      </div>
    </StyledTabWrapper>
  );
};
