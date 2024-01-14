import React from "react";
import styled from "styled-components";

const StyledPeopleMobile = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 700.39px;
  overflow: hidden;
  position: relative;
  width: 100%;

  & .frame-wrapper {
    align-self: stretch;
    background-image: url(https://psb-eta.vercel.app/rgd/mobile/img/bg.svg);
    background-size: 100% 100%;
    height: 669.39px;
    position: relative;
    width: 100%;
  }

  & .frame-5 {
    align-items: center;
    display: inline-flex;
    flex-direction: column;
    gap: 23px;
    position: relative;
    top: 18px;
  }

  & .text-wrapper-16 {
    color: var(--variable-collection-BLACK-duplicate);
    font-family: "RussianRail G Pro-Regular", Helvetica;
    font-size: 32px;
    font-weight: 400;
    height: 89px;
    letter-spacing: 1.6px;
    line-height: 31px;
    margin-top: -1px;
    position: relative;
    width: 250px;
  }

  & .div-3 {
    color: transparent;
    font-family: var(--ARIAL-font-family);
    font-size: var(--ARIAL-font-size);
    font-style: var(--ARIAL-font-style);
    font-weight: var(--ARIAL-font-weight);
    letter-spacing: var(--ARIAL-letter-spacing);
    line-height: var(--ARIAL-line-height);
    position: relative;
    width: 250px;
  }

  & .text-wrapper-17 {
    color: #000000;
    font-family: var(--ARIAL-font-family);
    font-size: var(--ARIAL-font-size);
    font-style: var(--ARIAL-font-style);
    font-weight: var(--ARIAL-font-weight);
    letter-spacing: var(--ARIAL-letter-spacing);
    line-height: var(--ARIAL-line-height);
  }

  & .text-wrapper-18 {
    color: #e21a1a;
    font-family: var(--ARIAL-font-family);
    font-size: var(--ARIAL-font-size);
    font-style: var(--ARIAL-font-style);
    font-weight: var(--ARIAL-font-weight);
    letter-spacing: var(--ARIAL-letter-spacing);
    line-height: var(--ARIAL-line-height);
  }

  & .flexcontainer {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 250px;
  }

  & .text {
    align-self: stretch;
    color: var(--variable-collection-BLACK-duplicate);
    font-family: var(--MOBILE-01-font-family);
    font-size: var(--MOBILE-01-font-size);
    font-style: var(--MOBILE-01-font-style);
    font-weight: var(--MOBILE-01-font-weight);
    letter-spacing: var(--MOBILE-01-letter-spacing);
    line-height: var(--MOBILE-01-line-height);
    position: relative;
  }

  & .text-wrapper-19 {
    color: #000000;
    font-family: var(--MOBILE-01-font-family);
    font-size: var(--MOBILE-01-font-size);
    font-style: var(--MOBILE-01-font-style);
    font-weight: var(--MOBILE-01-font-weight);
    letter-spacing: var(--MOBILE-01-letter-spacing);
    line-height: var(--MOBILE-01-line-height);
  }

  & .text-wrapper-20 {
    color: #e21a1a;
    font-family: var(--MOBILE-01-font-family);
    font-size: var(--MOBILE-01-font-size);
    font-style: var(--MOBILE-01-font-style);
    font-weight: var(--MOBILE-01-font-weight);
    letter-spacing: var(--MOBILE-01-letter-spacing);
    line-height: var(--MOBILE-01-line-height);
  }

  & .MOBILE-6 {
    height: 237px;
    object-fit: cover;
    position: relative;
    width: 289px;
  }

  & .view-4 {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 1;
    flex-grow: 1;
    gap: 10px;
    position: relative;
    width: 100%;
  }

  & .text-wrapper-21 {
    color: var(--variable-collection-RZD-RED-duplicate);
    font-family: "Arial-Regular", Helvetica;
    font-size: 14px;
    font-weight: 400;
    height: 15.63px;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -0.81px;
    position: relative;
    text-align: right;
    white-space: nowrap;
    width: 179.86px;
  }

  & .vector-3 {
    height: 8.06px;
    position: relative;
    width: 11.6px;
  }
`;

export const PeopleMobile = () => {
  return (
    <StyledPeopleMobile>
      <div className="frame-wrapper">
        <div className="frame-5">
          <p className="text-wrapper-16">/ В РЖД РАБОТАЮТ ЛЮДИ ДЕЛА</p>
          <p className="div-3">
            <span className="text-wrapper-17">Основа нашей компании,ее главный активи наибольшая ценность – </span>
            <span className="text-wrapper-18">это люди</span>
          </p>
          <div className="flexcontainer">
            <p className="text">
              <span className="text-wrapper-19">
                Реальные дела лежат в основе всей нашей деятельности, они наполняют ее смыслом.
                <br />
              </span>
            </p>
            <p className="text">
              <span className="text-wrapper-19">А это значит, что в РЖД работают те, кто </span>
              <span className="text-wrapper-20">любит дело</span>
              <span className="text-wrapper-19">, для кого жизненно важно идти вперед и приносить пользу.</span>
            </p>
          </div>
          <img className="MOBILE-6" alt="Mobile" src="https://psb-eta.vercel.app/rgd/mobile/img/mobile-1.png" />
        </div>
      </div>
      <div className="view-4">
        <div className="text-wrapper-21">присоединиться к команде</div>
        <img className="vector-3" alt="Vector" src="https://psb-eta.vercel.app/rgd/mobile/img/vector-6.svg" />
      </div>
    </StyledPeopleMobile>
  );
};
