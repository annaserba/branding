import React from "react";
import styled from "styled-components";

const StyledRgdCompanies = styled.div`
  height: 497px;
  left: 4px;
  width: 100%;
  position: relative;

  & .overlap-8 {
    height: 497px;
    position: relative;
    width:100%;
  }

  & .image-13 {
    height: 414px;
    left: 0;
    position: absolute;
    top: 83px;
    width:100%;
  }

  & .image-14 {
    height: 448px;
    left: 0;
    position: absolute;
    top: 49px;
    width:100%;
  }

  & .image-15 {
    height: 497px;
    left: 0;
    mix-blend-mode: multiply;
    position: absolute;
    top: 0;
    width:100%;
  }

  & .view-34 {
    height: 395px;
    left: 573px;
    position: absolute;
    top: 50px;
    width: 511px;
  }

  & .element-2 {
    height: 77px;
    left: 0;
    position: absolute;
    top: 317px;
    width: 215px;
  }

  & .text-wrapper-43 {
    color: #ffffff;
    font-family: "Arial-Regular", Helvetica;
    font-size: 25px;
    font-weight: 400;
    left: 0;
    letter-spacing: 1.25px;
    line-height: 24.2px;
    position: absolute;
    top: 53px;
    white-space: nowrap;
  }

  & .element-3 {
    height: 43px;
    left: 5px;
    position: absolute;
    top: 0;
    width: 60px;
  }

  & .element-4 {
    height: 78px;
    left: 75px;
    position: absolute;
    top: 213px;
    width: 263px;
  }

  & .text-wrapper-44 {
    color: #ffffff;
    font-family: "Arial-Regular", Helvetica;
    font-size: 25px;
    font-weight: 400;
    left: 0;
    letter-spacing: 1.25px;
    line-height: 24.2px;
    position: absolute;
    top: 54px;
    white-space: nowrap;
  }

  & .element-5 {
    height: 45px;
    left: 7px;
    position: absolute;
    top: 0;
    width: 97px;
  }

  & .element-6 {
    height: 78px;
    left: 152px;
    position: absolute;
    top: 110px;
    width: 155px;
  }

  & .element-7 {
    height: 44px;
    left: 7px;
    position: absolute;
    top: 0;
    width: 146px;
  }

  & .element-8 {
    height: 78px;
    left: 231px;
    position: absolute;
    top: 7px;
    width: 278px;
  }

  & .element-9 {
    height: 44px;
    left: 7px;
    position: absolute;
    top: 0;
    width: 269px;
  }

  & .element-10 {
    color: transparent;
    font-family: "Arial-Regular", Helvetica;
    font-size: 20px;
    font-weight: 400;
    left: 43px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 160px;
    width: 272px;
  }

  & .text-wrapper-45 {
    color: #000000;
  }

  & .text-wrapper-46 {
    color: #999999;
  }

  & .text-wrapper-47 {
    color: #000000;
    font-family: "RussianRail G Pro-Regular", Helvetica;
    font-size: 50px;
    font-weight: 400;
    left: 43px;
    letter-spacing: 2.5px;
    line-height: 48.5px;
    position: absolute;
    top: 0;
    width: 510px;
  }
`;

export const RgdCompanies = () => {
  return (
    <StyledRgdCompanies>
      <div className="overlap-8">
        <img className="image-13" alt="Image" src="https://psb-eta.vercel.app/rgd/desktop/img/6.svg" />
        <img className="image-14" alt="Image" src="https://psb-eta.vercel.app/rgd/desktop/img/image-5.svg" />
        <img className="image-15" alt="Image" src="https://psb-eta.vercel.app/rgd/desktop/img/5.svg" />
        <div className="view-34">
          <div className="element-2">
            <div className="text-wrapper-43">регионов России</div>
            <img className="element-3" alt="Element" src="https://psb-eta.vercel.app/rgd/desktop/img/77.svg" />
          </div>
          <div className="element-4">
            <div className="text-wrapper-44">лет истории и опыта</div>
            <img className="element-5" alt="Element" src="https://psb-eta.vercel.app/rgd/desktop/img/185.svg" />
          </div>
          <div className="element-6">
            <div className="text-wrapper-44">профессий</div>
            <img className="element-7" alt="Element" src="https://psb-eta.vercel.app/rgd/desktop/img/1-000.svg" />
          </div>
          <div className="element-8">
            <div className="text-wrapper-44">работников</div>
            <img className="element-9" alt="Element" src="https://psb-eta.vercel.app/rgd/desktop/img/1-000-000.svg" />
          </div>
        </div>
        <p className="element-10">
          <span className="text-wrapper-45">
            Национальный лидер транспортной отраслии один из крупнейших работодателей страны.
          </span>
          <span className="text-wrapper-46">2</span>
        </p>
        <div className="text-wrapper-47">/ РОССИЙСКИЕ ЖЕЛЕЗНЫЕ ДОРОГИ</div>
      </div>
    </StyledRgdCompanies>
  );
};
