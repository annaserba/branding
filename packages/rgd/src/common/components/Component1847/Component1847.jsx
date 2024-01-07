import React from "react";
import styled from "styled-components";

const StyledComponent1847 = styled.div`
  background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-59.svg);
  background-size: 100% 100%;
  height: 38px;
  position: relative;
  width: 78px;

  & .text-wrapper-18 {
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
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-58.svg);
  }
`;

export const Component1847 = ({ className }) => {
  return (
    <StyledComponent1847 className={`component-1847 ${className}`}>
      <div className="text-wrapper-18">БАМ</div>
    </StyledComponent1847>
  );
};
