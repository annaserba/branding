import React from "react";
import styled from "styled-components";

const StyledComponent1848 = styled.div`
  background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-61.svg);
  background-size: 100% 100%;
  height: 38px;
  position: relative;
  width: 155px;

  & .text-wrapper-19 {
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
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-60.svg);
  }
`;

export const Component1848 = ({ className }) => {
  return (
    <StyledComponent1848 className={`component-1848 ${className}`}>
      <div className="text-wrapper-19">ТРАНССИБ</div>
    </StyledComponent1848>
  );
};
