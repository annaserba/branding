import React from "react";
import styled from "styled-components";

const StyledNamecandidateNameViewScore10001 = styled.div`
  height: 136px;
  left: 492px;
  position: absolute;
  top: 428px;
  width: 366px;

  & .view-16 {
    height: 136px;
    left: 79px;
    position: absolute;
    top: 0;
    width: 289px;
  }

  & .group {
    height: 90px;
    left: 0;
    position: absolute;
    top: 46px;
    width: 291px;
  }

  & .flexcontainer {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 89px;
    left: 17px;
    position: absolute;
    top: 0;
    width: 270px;
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
    position: relative;
  }

  & .span {
    color: #636363;
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
  }

  & .flexcontainer-2 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 89px;
    left: 0;
    position: absolute;
    top: 1px;
    width: 14px;
  }

  & .span-wrapper {
    align-self: stretch;
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
  }

  & .text-wrapper-11 {
    color: #000000;
    font-family: "Arial-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0;
  }

  & .text-wrapper-12 {
    color: var(--variable-collection-BLACK);
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    left: 0;
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    position: absolute;
    top: 0;
  }

  & .image-4 {
    height: 45px;
    left: -2px;
    position: absolute;
    top: -2px;
    width: 45px;
  }
`;

export const NamecandidateNameViewScore10001 = () => {
  return (
    <StyledNamecandidateNameViewScore10001>
      <div className="view-16">
        <div className="group">
          <div className="flexcontainer">
            <p className="text">
              <span className="span">
                самореализации
                <br />
              </span>
            </p>
            <p className="text">
              <span className="span">
                развития и карьеры
                <br />
              </span>
            </p>
            <p className="text">
              <span className="span">участия в изменениях</span>
            </p>
          </div>
          <div className="flexcontainer-2">
            <p className="span-wrapper">
              <span className="text-wrapper-11">
                ▪<br />
              </span>
            </p>
            <p className="span-wrapper">
              <span className="text-wrapper-11">
                ▪<br />
              </span>
            </p>
            <p className="span-wrapper">
              <span className="text-wrapper-11">▪</span>
            </p>
          </div>
        </div>
        <div className="text-wrapper-12">ВОЗМОЖНОСТИ</div>
      </div>
      <img className="image-4" alt="Image" src="https://psb-eta.vercel.app/rgd/desktop/img/14.png" />
    </StyledNamecandidateNameViewScore10001>
  );
};
