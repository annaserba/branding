import React from "react";
import styled from "styled-components";

const StyledAdventigesComponentWrapper = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 29px;
  min-width: 45%;
  position: relative;

  & .image-2 {
    height: 47.64px;
    margin-top: -2.25px;
    position: relative;
    width: 61.74px;
  }

  & .view-3 {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 10px;
    position: relative;
  }

  & .text-wrapper-23 {
    color: var(--variable-collection-BLACK);
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    margin-top: -1px;
    position: relative;
    width: 299.83px;
  }

  & .group-2 {
    height: 90px;
    margin-right: -4px;
    position: relative;
    width: 326.29px;
  }

  & .flexcontainer {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 303px;
  }

  & .text-3 {
    align-self: stretch;
    color: #636363;
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
    position: relative;
    margin: 0;
  }

  & .text-wrapper-24 {
    color: #636363;
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
  }

  & .text-4 {
    align-self: stretch;
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
  }

  & .text-wrapper-25 {
    color: #000000;
    font-family: "Arial-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0;
  }
`;

export const AdventigesComponentWrapper = () => {
  return (
    <StyledAdventigesComponentWrapper>
      <img className="image-2" alt="Image" src="https://psb-eta.vercel.app/rgd/desktop/img/5.svg" />
      <div className="view-3">
        <div className="text-wrapper-23">ТЕХНОЛОГИЧНОСТЬ</div>
        <div className="group-2">
          <div className="flexcontainer">
            <p className="text-3">
              <span className="text-wrapper-24">
                <span className="text-wrapper-25">▪ </span> в продуктах и услугах
              </span>
            </p>
            <p className="text-3">
              <span className="text-wrapper-24">
                <span className="text-wrapper-25">▪ </span> в бизнес-процессах
              </span>
            </p>
            <p className="text-3">
              <span className="text-wrapper-24">
                <span className="text-wrapper-25">▪ </span> в коммуникации
              </span>
            </p>
          </div>
        </div>
      </div>
    </StyledAdventigesComponentWrapper>
  );
};
