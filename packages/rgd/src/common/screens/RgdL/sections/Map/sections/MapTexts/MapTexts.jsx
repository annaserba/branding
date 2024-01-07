import React from "react";
import styled from "styled-components";

const StyledMapTexts = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  left: 0;
  position: absolute;
  top: 0;

  & .text-wrapper-35 {
    color: var(--variable-collection-BLACK);
    font-family: "RussianRail G Pro-Regular", Helvetica;
    font-size: 50px;
    font-weight: 400;
    height: 80.82px;
    letter-spacing: 2.5px;
    line-height: 48.5px;
    margin-top: -1px;
    position: relative;
    width: 715.52px;
  }

  & .text-wrapper-36 {
    color: #000000;
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    height: 38.73px;
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
    position: relative;
    width: 505.39px;
  }
`;

export const MapTexts = () => {
  return (
    <StyledMapTexts>
      <div className="text-wrapper-35">
        / ГЕОГРАФИЯ
        <br />
        ВАКАНСИЙ
      </div>
      <p className="text-wrapper-36">
        Работаем в масштабах большой страны.
        <br />
        Нажмите на дорогу, чтобы посмотреть вакансии.
      </p>
    </StyledMapTexts>
  );
};
