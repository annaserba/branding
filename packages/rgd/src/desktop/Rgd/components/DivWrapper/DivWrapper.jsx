import React from "react";
import styled from "styled-components";

const StyledDivWrapper = styled.div`
  background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-45.svg);
  background-size: 100% 100%;
  height: 38px;
  position: relative;
  width: 155px;

  & .text-wrapper-2 {
    color: var(--variable-collection-BLACK);
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    left: 7px;
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    position: absolute;
    top: 3px;
  }

  &:hover {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-44.svg);
  }
`;

export const DivWrapper = ({ className }) => {
  return (
    <StyledDivWrapper className={`div-wrapper ${className}`}>
      <div className="text-wrapper-2">ТРАНССИБ</div>
    </StyledDivWrapper>
  );
};
