import React from "react";
import styled from "styled-components";

const StyledAdventigesComponent = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  min-width: 376px;
  position: relative;

  & .image {
    height: 48.8px;
    margin-bottom: -2.25px;
    margin-top: -2.25px;
    position: relative;
    width: 50.13px;
  }

  & .view-2 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 40px;
    height: 47px;
    left: 89px;
    position: absolute;
    top: 0;
    width: 322px;
  }

  & .text-wrapper-20 {
    align-self: stretch;
    color: var(--variable-collection-BLACK);
    flex: 1;
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
  }

  & .group {
    align-self: stretch;
    flex: 1;
    flex-grow: 1;
    margin-right: -4px;
    position: relative;
    width: 100%;
  }

  & .flexcontainer {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 303px;
  }

  & .text {
    align-self: stretch;
    color: #636363;
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
    margin-bottom: -20.34px;
    position: relative;
  }

  & .text-wrapper-21 {
    color: #636363;
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
  }

  & .span-wrapper {
    align-self: stretch;
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    margin-bottom: -44.34px;
    position: relative;
  }

  & .text-wrapper-22 {
    color: #000000;
    font-family: "Arial-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0;
  }

  & .text-2 {
    align-self: stretch;
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    margin-bottom: -20.34px;
    position: relative;
  }
`;

export const AdventigesComponent = () => {
  return (
    <StyledAdventigesComponent>
      <img className="image" alt="Image" src="https://psb-eta.vercel.app/rgd/desktop/img/7.png" />
      <div className="view-2">
        <div className="text-wrapper-20">МАСШТАБ</div>
        <div className="group">
          <div className="flexcontainer">
            <p className="text">
              <span className="text-wrapper-21">
                <span className="text-wrapper-22">▪ </span>территории
              </span>
            </p>
            <p className="text">
              <span className="text-wrapper-21">
                <span className="text-wrapper-22">▪ </span>задач
              </span>
            </p>
            <p className="text">
              <span className="text-wrapper-21">
                <span className="text-wrapper-22">▪ </span>
                вклада в экономику страны</span>
            </p>
          </div>
        </div>
      </div>
    </StyledAdventigesComponent>
  );
};
