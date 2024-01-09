import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-grow: 1;
  gap: 34px;
  min-width: 411px;
  position: relative;

  & .image-3 {
    height: 48px;
    margin-bottom: -1.69px;
    margin-top: -2.25px;
    position: relative;
    width: 56.53px;
  }

  & .view-4 {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 10px;
    position: relative;
  }

  & .text-wrapper-26 {
    color: var(--variable-collection-BLACK);
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    margin-top: -1px;
    position: relative;
    width: 115.35px;
  }

  & .group-3 {
    height: 112px;
    left: 1px;
    position: absolute;
    top: 46px;
    width: 325px;
  }

  & .flexcontainer {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 302px;
  }

  & .text-5 {
    align-self: stretch;
    color: #636363;
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
    position: relative;
  }

  & .text-wrapper-27 {
    color: #636363;
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
  }

  & .text-6 {
    align-self: stretch;
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
  }

  & .text-wrapper-28 {
    color: #000000;
    font-family: "Arial-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0;
  }
`;

export const Div = () => {
  return (
    <StyledDiv>
      <img className="image-3" alt="Image" src="https://psb-eta.vercel.app/rgd/desktop/img/3.svg" />
      <div className="view-4">
        <div className="text-wrapper-26">ЗАБОТА</div>
        <div className="group-3">
          <div className="flexcontainer">
            <p className="text-5">
              <span className="text-wrapper-27">
                <span className="text-wrapper-28">▪ </span>о людях
              </span>
            </p>
            <p className="text-5">
              <span className="text-wrapper-27">
                 <span className="text-wrapper-28">▪ </span>об экологии
              </span>
            </p>
            <p className="text-5">
              <span className="text-wrapper-27"> <span className="text-wrapper-28">▪ </span>о благополучии (здоровье, семья, дом, отдых, спорт)</span>
            </p>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};
