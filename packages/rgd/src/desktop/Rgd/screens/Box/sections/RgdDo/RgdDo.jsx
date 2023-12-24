import React from "react";
import styled from "styled-components";

const StyledRgdDo = styled.div`
  height: 540px;
  left: 49px;
  width: 100%;
  position: relative;

  & .view-28 {
    height: 148px;
    left: 787px;
    position: absolute;
    top: 392px;
    width: 375px;
  }

  & .text-wrapper-36 {
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Regular", Helvetica;
    font-size: 28px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 116px;
    width: 373px;
  }

  & .image-8 {
    height: 86px;
    left: -2px;
    position: absolute;
    top: 0;
    width: 83px;
  }

  & .view-29 {
    height: 139px;
    left: 393px;
    position: absolute;
    top: 401px;
    width: 296px;
  }

  & .text-wrapper-37 {
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Regular", Helvetica;
    font-size: 28px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 107px;
    width: 294px;
  }

  & .image-9 {
    height: 69px;
    left: -1px;
    position: absolute;
    top: 0;
    width: 95px;
  }

  & .view-30 {
    height: 144px;
    left: 0;
    position: absolute;
    top: 396px;
    width: 375px;
  }

  & .text-wrapper-38 {
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Regular", Helvetica;
    font-size: 28px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 112px;
    width: 373px;
  }

  & .image-10 {
    height: 82px;
    left: 0;
    position: absolute;
    top: -2px;
    width: 84px;
  }

  & .view-31 {
    height: 120px;
    left: 787px;
    position: absolute;
    top: 166px;
    width: 375px;
  }

  & .text-wrapper-39 {
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Regular", Helvetica;
    font-size: 28px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 88px;
    width: 373px;
  }

  & .image-11 {
    height: 61px;
    left: 0;
    position: absolute;
    top: -2px;
    width: 144px;
  }

  & .view-32 {
    height: 120px;
    left: 393px;
    position: absolute;
    top: 166px;
    width: 376px;
  }

  & .text-wrapper-40 {
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Regular", Helvetica;
    font-size: 28px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 88px;
    width: 374px;
  }

  & .view-33 {
    height: 151px;
    left: 0;
    position: absolute;
    top: 167px;
    width: 309px;
  }

  & .text-wrapper-41 {
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Regular", Helvetica;
    font-size: 28px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 87px;
    width: 307px;
  }

  & .image-12 {
    height: 60px;
    left: 0;
    position: absolute;
    top: -2px;
    width: 144px;
  }

  & .text-wrapper-42 {
    color: var(--variable-collection-BLACK);
    font-family: "RussianRail G Pro-Regular", Helvetica;
    font-size: 50px;
    font-weight: 400;
    left: 0;
    letter-spacing: 2.5px;
    line-height: 48.5px;
    position: absolute;
    top: 0;
  }
`;

export const RgdDo = () => {
  return (
    <StyledRgdDo>
      <div className="view-28">
        <div className="text-wrapper-36">Наука</div>
        <img className="image-8" alt="Image" src="https://psb-eta.vercel.app/rgd/desktop/img/10.png" />
      </div>
      <div className="view-29">
        <div className="text-wrapper-37">Социальная сфера</div>
        <img className="image-9" alt="Image" src="https://psb-eta.vercel.app/rgd/desktop/img/9.png" />
      </div>
      <div className="view-30">
        <div className="text-wrapper-38">Строительство</div>
        <img className="image-10" alt="Image" src="https://psb-eta.vercel.app/rgd/desktop/img/8.png" />
      </div>
      <div className="view-31">
        <div className="text-wrapper-39">Инфраструктура</div>
        <img className="image-11" alt="Image" src="https://psb-eta.vercel.app/rgd/desktop/img/7.png" />
      </div>
      <div className="view-32">
        <div className="text-wrapper-40">Грузовые перевозки</div>
        <img className="image-11" alt="Image" src="https://psb-eta.vercel.app/rgd/desktop/img/6.png" />
      </div>
      <div className="view-33">
        <div className="text-wrapper-41">Пассажирские перевозки</div>
        <img className="image-12" alt="Image" src="https://psb-eta.vercel.app/rgd/desktop/img/5.png" />
      </div>
      <p className="text-wrapper-42">
        / МЫ ГОРДИМСЯ ТЕМ,
        <br />
        ЧТО ДЕЛАЕМ
      </p>
    </StyledRgdDo>
  );
};
