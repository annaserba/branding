import React from "react";
import styled from "styled-components";

const StyledView = styled.div`
  height: 666px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1157px;

  & .overlap-group-3 {
    height: 666px;
    position: relative;
  }

  & .image {
    height: 38px;
    left: 22px;
    position: absolute;
    top: 244px;
    width: 52px;
  }

  & .image-2 {
    height: 90px;
    left: 413px;
    position: absolute;
    top: 168px;
    width: 105px;
  }

  & .subtract {
    height: 666px;
    left: 0;
    position: absolute;
    top: 0;
    width: 1150px;
  }

  & .image-3 {
    height: 119px;
    left: 1070px;
    position: absolute;
    top: 419px;
    width: 87px;
  }
`;

export const View = () => {
  return (
    <StyledView>
      <div className="overlap-group-3">
        <img className="image" alt="Image" src="https://psb-eta.vercel.app/rgd/desktop/img/1-2.svg" />
        <img className="image-2" alt="Image" src="https://psb-eta.vercel.app/rgd/desktop/img/1-4.svg" />
        <img className="subtract" alt="Subtract" src="https://psb-eta.vercel.app/rgd/desktop/img/subtract-1.svg" />
        <img className="image-3" alt="Image" src="https://psb-eta.vercel.app/rgd/desktop/img/1.svg" />
      </div>
    </StyledView>
  );
};
