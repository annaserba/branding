import React from "react";
import styled from "styled-components";

const StyledAboutCompany = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 497px;
  position: relative;

  & .overlap-group-wrapper {
    align-self: stretch;
    flex: 1;
    flex-grow: 1;
    position: relative;
    width: 100%;
  }

  & .overlap {
    height: 497px;
    position: relative;
    width: 1250px;
  }

  & .background {
    height: 497px;
    left: 0;
    position: absolute;
    top: 0;
    width: 1250px;
  }

  & .overlap-group-2 {
    height: 497px;
    position: relative;
  }

  & .img-2 {
    height: 414px;
    left: 0;
    position: absolute;
    top: 83px;
    width: 1250px;
  }

  & .img-3 {
    height: 448px;
    left: 0;
    position: absolute;
    top: 49px;
    width: 1250px;
  }

  & .img-4 {
    height: 497px;
    left: 0;
    mix-blend-mode: multiply;
    position: absolute;
    top: 0;
    width: 1250px;
  }

  & .digital {
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

  & .text-wrapper-4 {
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

  & .text-wrapper-5 {
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

  & .texts {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 12px;
    left: 43px;
    position: absolute;
    top: 0;
    width: 510px;
  }

  & .text-wrapper-6 {
    color: #000000;
    font-family: "RussianRail G Pro-Regular", Helvetica;
    font-size: 50px;
    font-weight: 400;
    height: 148px;
    letter-spacing: 2.5px;
    line-height: 48.5px;
    margin-right: -0.2px;
    margin-top: -1px;
    position: relative;
    width: 510px;
  }

  & .p {
    color: transparent;
    font-family: "Arial-Regular", Helvetica;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    width: 272px;
  }

  & .span {
    color: #000000;
  }

  & .text-wrapper-7 {
    color: #999999;
  }
`;

export const AboutCompany = ({ className }) => {
  return (
    <StyledAboutCompany className={`about-company ${className}`}>
      <div className="overlap-group-wrapper">
        <div className="overlap">
          <div className="background">
            <div className="overlap-group-2">
              <img className="img-2" alt="Img" src="https://psb-eta.vercel.app/rgd/desktop/img/2.svg" />
              <img className="img-3" alt="Img" src="https://psb-eta.vercel.app/rgd/desktop/img/5-2.svg" />
              <img className="img-4" alt="Img" src="https://psb-eta.vercel.app/rgd/desktop/img/image-7.svg" />
            </div>
          </div>
          <div className="digital">
            <div className="element-2">
              <div className="text-wrapper-4">регионов России</div>
              <img className="element-3" alt="Element" src="https://psb-eta.vercel.app/rgd/desktop/img/77.svg" />
            </div>
            <div className="element-4">
              <div className="text-wrapper-5">лет истории и опыта</div>
              <img className="element-5" alt="Element" src="https://psb-eta.vercel.app/rgd/desktop/img/185.svg" />
            </div>
            <div className="element-6">
              <div className="text-wrapper-5">профессий</div>
              <img className="element-7" alt="Element" src="https://psb-eta.vercel.app/rgd/desktop/img/1-000.svg" />
            </div>
            <div className="element-8">
              <div className="text-wrapper-5">работников</div>
              <img className="element-9" alt="Element" src="https://psb-eta.vercel.app/rgd/desktop/img/1-000-000.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="texts">
        <div className="text-wrapper-6">/ РОССИЙСКИЕ ЖЕЛЕЗНЫЕ ДОРОГИ</div>
        <p className="p">
          <span className="span">
            Национальный лидер транспортной отраслии один из крупнейших работодателей страны.
          </span>
          <span className="text-wrapper-7">2</span>
        </p>
      </div>
    </StyledAboutCompany>
  );
};
