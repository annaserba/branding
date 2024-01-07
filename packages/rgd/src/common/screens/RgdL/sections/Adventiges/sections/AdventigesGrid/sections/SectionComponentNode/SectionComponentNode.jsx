import React from "react";
import styled from "styled-components";

const StyledSectionComponentNode = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-grow: 1;
  gap: 10px;
  min-width: 411px;
  position: relative;

  & .image-4 {
    height: 45px;
    margin-bottom: -1.68px;
    margin-left: -1.5px;
    margin-top: -2.25px;
    position: relative;
    width: 49.76px;
  }

  & .view-5 {
    align-items: flex-start;
    display: inline-flex;
    flex-direction: column;
    gap: 12px;
    left: 89px;
    position: absolute;
    top: 0;
  }

  & .text-wrapper-29 {
    color: var(--variable-collection-BLACK);
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    margin-top: -1px;
    position: relative;
    width: 244.8px;
  }

  & .group-4 {
    height: 90px;
    margin-right: -4px;
    position: relative;
    width: 326.29px;
  }

  & .flexcontainer-7 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 89px;
    left: 19px;
    position: absolute;
    top: 0;
    width: 303px;
  }

  & .text-7 {
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

  & .text-wrapper-30 {
    color: #636363;
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
  }

  & .flexcontainer-8 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 89px;
    left: 0;
    position: absolute;
    top: 1px;
    width: 16px;
  }

  & .text-8 {
    align-self: stretch;
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
  }

  & .text-wrapper-31 {
    color: #000000;
    font-family: "Arial-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0;
  }
`;

export const SectionComponentNode = () => {
  return (
    <StyledSectionComponentNode>
      <img className="image-4" alt="Image" src="https://psb-eta.vercel.app/rgd/desktop/img/1.png" />
      <div className="view-5">
        <div className="text-wrapper-29">ВОЗМОЖНОСТИ</div>
        <div className="group-4">
          <div className="flexcontainer-7">
            <p className="text-7">
              <span className="text-wrapper-30">
                самореализации
                <br />
              </span>
            </p>
            <p className="text-7">
              <span className="text-wrapper-30">
                развития и карьеры
                <br />
              </span>
            </p>
            <p className="text-7">
              <span className="text-wrapper-30">участия в изменениях</span>
            </p>
          </div>
          <div className="flexcontainer-8">
            <p className="text-8">
              <span className="text-wrapper-31">
                ▪<br />
              </span>
            </p>
            <p className="text-8">
              <span className="text-wrapper-31">
                ▪<br />
              </span>
            </p>
            <p className="text-8">
              <span className="text-wrapper-31">▪</span>
            </p>
          </div>
        </div>
      </div>
    </StyledSectionComponentNode>
  );
};
