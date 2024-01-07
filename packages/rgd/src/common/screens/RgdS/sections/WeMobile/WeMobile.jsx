import React from "react";
import styled from "styled-components";

const StyledWeMobile = styled.div`
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  gap: 51px;
  height: 916.84px;
  overflow: hidden;
  position: relative;

  & .text-wrapper-11 {
    color: #000000;
    font-family: "RussianRail G Pro-Regular", Helvetica;
    font-size: 32px;
    font-weight: 400;
    letter-spacing: 1.6px;
    line-height: 31px;
    margin-top: -1px;
    position: relative;
    width: fit-content;
  }

  & .view-3 {
    align-self: stretch;
    flex: 1;
    flex-grow: 1;
    margin-right: -2px;
    position: relative;
    width: 100%;
  }

  & .text-wrapper-12 {
    color: var(--variable-collection-BLACK-duplicate);
    font-family: var(--ARIAL-font-family);
    font-size: var(--ARIAL-font-size);
    font-style: var(--ARIAL-font-style);
    font-weight: var(--ARIAL-font-weight);
    left: 0;
    letter-spacing: var(--ARIAL-letter-spacing);
    line-height: var(--ARIAL-line-height);
    position: absolute;
    top: 62px;
    width: 284px;
  }

  & .image-2 {
    height: 48px;
    left: 0;
    position: absolute;
    top: -1px;
    width: 105px;
  }

  & .text-wrapper-13 {
    color: var(--variable-collection-BLACK-duplicate);
    font-family: var(--ARIAL-font-family);
    font-size: var(--ARIAL-font-size);
    font-style: var(--ARIAL-font-style);
    font-weight: var(--ARIAL-font-weight);
    left: 0;
    letter-spacing: var(--ARIAL-letter-spacing);
    line-height: var(--ARIAL-line-height);
    position: absolute;
    top: 66px;
    white-space: nowrap;
    width: 284px;
  }

  & .image-3 {
    height: 54px;
    left: 0;
    position: absolute;
    top: -1px;
    width: 59px;
  }

  & .text-wrapper-14 {
    color: var(--variable-collection-BLACK-duplicate);
    font-family: var(--ARIAL-font-family);
    font-size: var(--ARIAL-font-size);
    font-style: var(--ARIAL-font-style);
    font-weight: var(--ARIAL-font-weight);
    left: 0;
    letter-spacing: var(--ARIAL-letter-spacing);
    line-height: var(--ARIAL-line-height);
    position: absolute;
    top: 63px;
    width: 284px;
  }

  & .image-4 {
    height: 47px;
    left: 0;
    position: absolute;
    top: 0;
    width: 60px;
  }

  & .text-wrapper-15 {
    color: var(--variable-collection-BLACK-duplicate);
    font-family: var(--ARIAL-font-family);
    font-size: var(--ARIAL-font-size);
    font-style: var(--ARIAL-font-style);
    font-weight: var(--ARIAL-font-weight);
    left: 0;
    letter-spacing: var(--ARIAL-letter-spacing);
    line-height: var(--ARIAL-line-height);
    position: absolute;
    top: 67px;
    white-space: nowrap;
    width: 284px;
  }

  & .image-5 {
    height: 55px;
    left: 0;
    position: absolute;
    top: 0;
    width: 60px;
  }
`;

export const WeMobile = () => {
  return (
    <StyledWeMobile>
      <p className="text-wrapper-11">/ МЫ ГОРДИМСЯ ТЕМ, ЧТО ДЕЛАЕМ</p>
      <div className="view-3">
        <div className="text-wrapper-12">Пассажирские перевозки</div>
        <img className="image-2" alt="Image" src="https://psb-eta.vercel.app/rgd/mobile/img/5.png" />
      </div>
      <div className="view-3">
        <div className="text-wrapper-12">Грузовые перевозки</div>
        <img className="image-2" alt="Image" src="https://psb-eta.vercel.app/rgd/mobile/img/4.png" />
      </div>
      <div className="view-3">
        <div className="text-wrapper-12">Инфраструктура</div>
        <img className="image-2" alt="Image" src="https://psb-eta.vercel.app/rgd/mobile/img/3-2x.png" />
      </div>
      <div className="view-3">
        <div className="text-wrapper-13">Строительство</div>
        <img className="image-3" alt="Image" src="https://psb-eta.vercel.app/rgd/mobile/img/2.png" />
      </div>
      <div className="view-3">
        <div className="text-wrapper-14">Социальная сфера</div>
        <img className="image-4" alt="Image" src="https://psb-eta.vercel.app/rgd/mobile/img/1.png" />
      </div>
      <div className="view-3">
        <div className="text-wrapper-15">Наука</div>
        <img className="image-5" alt="Image" src="https://psb-eta.vercel.app/rgd/mobile/img/image.png" />
      </div>
    </StyledWeMobile>
  );
};
