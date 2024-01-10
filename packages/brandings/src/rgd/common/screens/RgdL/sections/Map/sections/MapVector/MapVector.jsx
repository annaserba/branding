import React from "react";
import { Component1847 } from "../../../../../../components/Component1847/Component1847";
import { Component1848 } from "../../../../../../components/Component1848/Component1848";
import { OverlapWrapper } from "./sections/OverlapWrapper";
import { View } from "./sections/View/View";
import { ViewWrapper } from "./sections/ViewWrapper";
import styled from "styled-components";

const StyledMapVector = styled.div`
  height: 647px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1250px;

  & .overlap-7 {
    height: 631px;
    left: 2px;
    position: relative;
    width: 1247px;
  }

  & .component-1847-instance {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-1.svg) !important;
    left: 993px !important;
    position: absolute !important;
    top: 561px !important;
  }

  & .component-1848-instance {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector.svg) !important;
    left: 1091px !important;
    position: absolute !important;
    top: 561px !important;
  }
`;

export const MapVector = () => {
  return (
    <StyledMapVector>
      <div className="overlap-7">
        <View />
        <OverlapWrapper />
        <ViewWrapper />
        <Component1847 className="component-1847-instance" />
        <Component1848 className="component-1848-instance" />
      </div>
    </StyledMapVector>
  );
};