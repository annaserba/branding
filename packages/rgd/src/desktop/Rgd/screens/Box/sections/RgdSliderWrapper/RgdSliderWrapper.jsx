import React from "react";
import { Component1541 } from "../../../../components/Component1541";
import styled from "styled-components";

const StyledRgdSliderWrapper = styled.div`

  position: relative;
  
  & .component-1541-instance {
    background-image: unset !important;
    background-size: unset !important;
    height: 558px !important;
    width:100%;
  }

  &.RGD-slider-2 {
  }

  &.RGD-slider-3 {
    background: unset !important;
  }
`;

export const RgdSliderWrapper = () => {
  return (
    <StyledRgdSliderWrapper>
      <Component1541
        className="RGD-slider"
        component1537Img="https://psb-eta.vercel.app/rgd/desktop/img/4.svg"
        component1537Img1="https://psb-eta.vercel.app/rgd/desktop/img/image.png"
        component1537Img2="https://psb-eta.vercel.app/rgd/desktop/img/image.png"
        component1537ItDigital="https://psb-eta.vercel.app/rgd/desktop/img/image.png"
        divClassName="RGD-slider-3"
        overlapGroupClassName="component-1541-instance"
        overlapGroupClassNameOverride="RGD-slider-2"
        prop="one"
      />
    </StyledRgdSliderWrapper>
  );
};
