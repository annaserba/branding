import React from "react";
import styled from "styled-components";

const StyledElementWrapper = styled.div`
  background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-43.svg);
  background-size: 100% 100%;
  height: 38px;
  position: relative;
  width: 78px;

  & .text-wrapper {
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
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-42.svg);
  }
`;

export const ElementWrapper = ({ className }) => {
  return (
    <StyledElementWrapper className={`element-wrapper ${className}`}>
      <div className="text-wrapper">БАМ</div>
    </StyledElementWrapper>
  );
};
