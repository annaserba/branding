import React from "react";
import { Component1528 } from "../../../../../../../../../../components/Component1528";
import styled from "styled-components";

const StyledViewWrapper = styled.div`
  height: 391px;
  left: 23px;
  position: absolute;
  top: 228px;
  width: 1031px;

  & .component-1528 {
    left: 36px !important;
    position: absolute !important;
    top: 0 !important;
  }

  & .component-1528-instance {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-40.svg) !important;
    width: unset !important;
  }

  & .view-2 {
    left: 71px !important;
    position: absolute !important;
    top: 25px !important;
  }

  & .view-3 {
    left: 0 !important;
    position: absolute !important;
    top: 149px !important;
  }

  & .component-1528-2 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-62.svg) !important;
    left: 52px !important;
    position: absolute !important;
    top: 234px !important;
  }

  & .component-1528-3 {
    left: 93px !important;
    position: absolute !important;
    top: 369px !important;
  }

  & .view-4 {
    left: 122px !important;
    position: absolute !important;
    top: 299px !important;
  }

  & .view-5 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-34.svg) !important;
    width: unset !important;
  }

  & .view-6 {
    left: 200px !important;
    position: absolute !important;
    top: 241px !important;
  }

  & .view-7 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-33.svg) !important;
    width: unset !important;
  }

  & .view-8 {
    left: 181px !important;
    position: absolute !important;
    top: 190px !important;
  }

  & .view-9 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-38.svg) !important;
    width: 58px !important;
  }

  & .view-10 {
    left: 202px !important;
    position: absolute !important;
    top: 130px !important;
  }

  & .view-11 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-37.svg) !important;
    width: unset !important;
  }

  & .view-12 {
    left: 319px !important;
    position: absolute !important;
    top: 255px !important;
  }

  & .view-13 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-32.svg) !important;
    width: unset !important;
  }

  & .component-1528-4 {
    left: 288px !important;
    position: absolute !important;
    top: 297px !important;
  }

  & .component-1528-5 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-31.svg) !important;
    width: unset !important;
  }

  & .component-1528-6 {
    left: 437px !important;
    position: absolute !important;
    top: 307px !important;
  }

  & .component-1528-7 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-30.svg) !important;
    width: unset !important;
  }

  & .overlap-group-wrapper {
    height: 22px;
    left: 580px;
    position: absolute;
    top: 328px;
    width: 48px;
  }

  & .overlap-5 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-29.svg);
    background-size: 100% 100%;
    height: 22px;
    position: relative;
  }

  & .text-wrapper-8 {
    color: #ffffff;
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    left: 6px;
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    position: absolute;
    top: 4px;
    width: 37px;
  }

  & .component-1528-8 {
    left: 642px !important;
    position: absolute !important;
    top: 351px !important;
  }

  & .component-1528-9 {
    width: unset !important;
  }

  & .view-14 {
    left: 755px !important;
    position: absolute !important;
    top: 328px !important;
  }

  & .view-15 {
    left: 971px !important;
    position: absolute !important;
    top: 257px !important;
  }
`;

export const ViewWrapper = () => {
  return (
    <StyledViewWrapper>
      <Component1528 className="component-1528" prop="one" />
      <Component1528 className="view-2" overlapGroupClassName="component-1528-instance" prop="two" />
      <Component1528 className="view-3" prop="three" />
      <Component1528 className="component-1528-2" prop="seven" />
      <Component1528 className="component-1528-3" prop="six" />
      <Component1528 className="view-4" overlapGroupClassName="view-5" prop="eight" />
      <Component1528 className="view-6" overlapGroupClassName="view-7" prop="nine" />
      <Component1528 className="view-8" overlapGroupClassName="view-9" prop="four" />
      <Component1528 className="view-10" overlapGroupClassName="view-11" prop="five" />
      <Component1528 className="view-12" overlapGroupClassName="view-13" prop="ten" />
      <Component1528 className="component-1528-4" overlapGroupClassName="component-1528-5" prop="eleven" />
      <Component1528 className="component-1528-6" overlapGroupClassName="component-1528-7" prop="twelve" />
      <div className="overlap-group-wrapper">
        <div className="overlap-5">
          <div className="text-wrapper-8">КРАС</div>
        </div>
      </div>
      <Component1528 className="component-1528-8" overlapGroupClassName="component-1528-9" prop="fourteen" />
      <Component1528 className="view-14" prop="fifteen" />
      <Component1528 className="view-15" prop="sixteen" />
    </StyledViewWrapper>
  );
};
