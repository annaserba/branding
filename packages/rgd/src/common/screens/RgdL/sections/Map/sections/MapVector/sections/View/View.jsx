import React from "react";
import styled from "styled-components";

const StyledView = styled.div`
  height: 560px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1247px;

  & .overlap-group-3 {
    height: 560px;
    position: relative;
  }

  & .image-5 {
    height: 32px;
    left: 23px;
    position: absolute;
    top: 206px;
    width: 56px;
  }

  & .image-6 {
    height: 76px;
    left: 445px;
    position: absolute;
    top: 141px;
    width: 113px;
  }

  & .subtract {
    height: 560px;
    left: 0;
    position: absolute;
    top: 0;
    width: 1239px;
  }

  & .image-7 {
    height: 100px;
    left: 1153px;
    position: absolute;
    top: 353px;
    width: 93px;
  }
`;

export const View = () => {
  return (
    <StyledView>
      <div className="overlap-group-3">
        <img className="image-5" alt="Image" src="https://psb-eta.vercel.app/rgd/desktop/img/1-4.svg" />
        <img className="image-6" alt="Image" src="https://psb-eta.vercel.app/rgd/desktop/img/image-6.svg" />
        <img className="subtract" alt="Subtract" src="https://psb-eta.vercel.app/rgd/desktop/img/subtract.svg" />
        <img className="image-7" alt="Image" src="https://psb-eta.vercel.app/rgd/desktop/img/image-4.svg" />
      </div>
    </StyledView>
  );
};
