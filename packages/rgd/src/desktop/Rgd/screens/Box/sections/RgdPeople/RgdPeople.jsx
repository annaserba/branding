import React from "react";
import styled from "styled-components";

const StyledRgdPeople = styled.div`
  height: 773px;
  left: 4px;
  width: 100%;
  position: relative;

  & .overlap-7 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/bg.svg);
    background-size: 100% 100%;
    height: 715px;
    left: 0;
    position: absolute;
    top: 0;
    width:100%;
  }

  & .element-png {
    height: 403px;
    left: 191px;
    object-fit: cover;
    position: absolute;
    top: 312px;
    width: 869px;
  }

  & .flexcontainer-9 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 102px;
    left: 635px;
    position: absolute;
    top: 183px;
    width: 547px;
  }

  & .text-7 {
    align-self: stretch;
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Regular", Helvetica;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
  }

  & .text-wrapper-31 {
    color: #000000;
  }

  & .text-wrapper-32 {
    color: #000000;
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
  }

  & .text-wrapper-33 {
    color: #e21a1a;
  }

  & .div-6 {
    color: transparent;
    font-family: "Arial-Regular", Helvetica;
    font-size: 28px;
    font-weight: 400;
    left: 45px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 183px;
    width: 544px;
  }

  & .text-wrapper-34 {
    color: var(--variable-collection-BLACK);
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    left: 45px;
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    position: absolute;
    top: 50px;
    width: 590px;
  }

  & .view-27 {
    height: 23px;
    left: 0;
    position: absolute;
    top: 750px;
    width: 267px;
  }

  & .text-wrapper-35 {
    color: var(--variable-collection-RZD-RED);
    font-family: "Arial-Regular", Helvetica;
    font-size: 20px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: right;
    top: 0;
    white-space: nowrap;
  }

  & .vector-2 {
    height: 12px;
    left: 259px;
    position: absolute;
    top: 6px;
    width: 7px;
  }
`;

export const RgdPeople = () => {
  return (
    <StyledRgdPeople>
      <div className="overlap-7">
        <img className="element-png" alt="Element png" src="https://psb-eta.vercel.app/rgd/desktop/img/02-png.png" />
        <div className="flexcontainer-9">
          <p className="text-7">
            <span className="text-wrapper-31">Реальные</span>
            <span className="text-wrapper-32">
              {" "}
              дела лежат в основе всей нашей деятельности, они наполняют ее смыслом.
              <br />
            </span>
          </p>
          <p className="text-7">
            <span className="text-wrapper-32">А это значит, что в РЖД работают</span>
            <span className="text-wrapper-31"> те, кто </span>
            <span className="text-wrapper-33">любит дело</span>
            <span className="text-wrapper-31">,для кого жизненно важно идти вперед и приносить пользу.</span>
          </p>
        </div>
        <p className="div-6">
          <span className="text-wrapper-31">Основа нашей компании,ее главный актив и наибольшая ценность – </span>
          <span className="text-wrapper-33">это люди</span>
        </p>
        <p className="text-wrapper-34">/ В РЖД РАБОТАЮТ ЛЮДИ ДЕЛА</p>
      </div>
      <div className="view-27">
        <div className="text-wrapper-35">присоединиться к команде</div>
        <img className="vector-2" alt="Vector" src="https://psb-eta.vercel.app/rgd/desktop/img/vector-79.svg" />
      </div>
    </StyledRgdPeople>
  );
};
