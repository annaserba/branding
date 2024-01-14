import React from "react";
import styled from "styled-components";

const StyledAboutMobile = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 492.27px;
  overflow: hidden;
  position: relative;
  width: 100%;

  & .frame-3 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 15px;
    padding: 10px 0px;
    position: relative;
    width: 100%;

    & .text-wrapper-8 {
      align-self: stretch;
      color: #000000;
      font-family: "RussianRail G Pro-Regular", Helvetica;
      font-size: 32px;
      font-weight: 400;
      height: 89px;
      letter-spacing: 1.6px;
      line-height: 31px;
      margin-top: -1px;
      position: relative;
    }
  }

  & .p {
    color: transparent;
    font-family: "Arial-Regular", Helvetica;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 22.4px;
    position: relative;
    width: fit-content;

    & .span {
      color: #000000;
      font-family: var(--MOBILE-01-font-family);
      font-size: var(--MOBILE-01-font-size);
      font-style: var(--MOBILE-01-font-style);
      font-weight: var(--MOBILE-01-font-weight);
      letter-spacing: var(--MOBILE-01-letter-spacing);
      line-height: var(--MOBILE-01-line-height);
    }
  }

  & .text-wrapper-9 {
    color: #999999;
  }

  & .frame-4 {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    gap: 10px;
    max-width: 290px;
    min-height: 273px;
    position: relative;
    width: 100%;

    & .image {
      height: 272.27px;
      position: relative;
      width: 290px;
    }

    & .view-2 {
      height: 216px;
      left: 7px;
      overflow: hidden;
      position: absolute;
      top: 28px;
      width: 280px;

      & .element-2 {
        height: 44px;
        left: 0;
        position: absolute;
        top: 174px;
        width: 122px;

        & .text-wrapper-10 {
          color: #ffffff;
          font-family: "Arial-Regular", Helvetica;
          font-size: 14px;
          font-weight: 400;
          left: 0;
          letter-spacing: 0.7px;
          line-height: 13.6px;
          position: absolute;
          top: 30px;
          white-space: nowrap;
        }

        & .element-3 {
          height: 23px;
          left: 3px;
          position: absolute;
          top: 0;
          width: 33px;
        }
      }

      & .element-4 {
        height: 44px;
        left: 41px;
        position: absolute;
        top: 117px;
        width: 148px;

        & .text-wrapper-10 {
          color: #ffffff;
          font-family: "Arial-Regular", Helvetica;
          font-size: 14px;
          font-weight: 400;
          left: 0;
          letter-spacing: 0.7px;
          line-height: 13.6px;
          position: absolute;
          top: 30px;
          white-space: nowrap;
        }

        & .element-5 {
          height: 24px;
          left: 4px;
          position: absolute;
          top: 0;
          width: 53px;
        }
      }

      & .element-6 {
        height: 44px;
        left: 83px;
        position: absolute;
        top: 60px;
        width: 86px;

        & .text-wrapper-10 {
          color: #ffffff;
          font-family: "Arial-Regular", Helvetica;
          font-size: 14px;
          font-weight: 400;
          left: 0;
          letter-spacing: 0.7px;
          line-height: 13.6px;
          position: absolute;
          top: 30px;
          white-space: nowrap;
        }

        & .element-7 {
          height: 24px;
          left: 4px;
          position: absolute;
          top: 0;
          width: 80px;
        }
      }

      & .element-8 {
        height: 44px;
        left: 127px;
        position: absolute;
        top: 4px;
        width: 153px;

        & .text-wrapper-10 {
          color: #ffffff;
          font-family: "Arial-Regular", Helvetica;
          font-size: 14px;
          font-weight: 400;
          left: 0;
          letter-spacing: 0.7px;
          line-height: 13.6px;
          position: absolute;
          top: 30px;
          white-space: nowrap;
        }

        & .element-9 {
          height: 24px;
          left: 4px;
          position: absolute;
          top: 0;
          width: 147px;
        }
      }
    }
  }
`;

export const AboutMobile = () => {
  return (
    <StyledAboutMobile>
      <div className="frame-3">
        <div className="text-wrapper-8">/ РОССИЙСКИЕ ЖЕЛЕЗНЫЕ ДОРОГИ</div>
        <p className="p">
          <span className="span">
            Национальный лидер транспортной отрасли и один из крупнейших работодателей страны.
          </span>
          <span className="text-wrapper-9">2</span>
        </p>
      </div>
      <div className="frame-4">
        <img className="image" alt="Image" src="https://psb-eta.vercel.app/rgd/mobile/img/6.svg" />
        <div className="view-2">
          <div className="element-2">
            <div className="text-wrapper-10">регионов России</div>
            <img className="element-3" alt="Element" src="https://psb-eta.vercel.app/rgd/mobile/img/77.svg" />
          </div>
          <div className="element-4">
            <div className="text-wrapper-10">лет истории и опыта</div>
            <img className="element-5" alt="Element" src="https://psb-eta.vercel.app/rgd/mobile/img/185.svg" />
          </div>
          <div className="element-6">
            <div className="text-wrapper-10">профессий</div>
            <img className="element-7" alt="Element" src="https://psb-eta.vercel.app/rgd/mobile/img/1-000.svg" />
          </div>
          <div className="element-8">
            <div className="text-wrapper-10">работников</div>
            <img className="element-9" alt="Element" src="https://psb-eta.vercel.app/rgd/mobile/img/1-000-000.svg" />
          </div>
        </div>
      </div>
    </StyledAboutMobile>
  );
};
