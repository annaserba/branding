import React from "react";
import styled from "styled-components";

const StyledTab4 = styled.div`
  height: 50px;
  width: 286px;

  & .overlap-3 {
    background-image: url(../img/vector-32.svg);
    background-size: 100% 100%;
    height: 558px;
    position: relative;
    width: 6250px;
  }

  & .text-wrapper-16 {
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
    width: 250px;
  }
`;

export const Tab4 = ({ className, overlapClassName }) => {
  return (
    <StyledTab4 className={`tab-4 ${className}`}>
      <div className={`overlap-3 ${overlapClassName}`}>
        <div className="text-wrapper-16">НАЧАЛО КАРЬЕРЫ</div>
      </div>
    </StyledTab4>
  );
};
