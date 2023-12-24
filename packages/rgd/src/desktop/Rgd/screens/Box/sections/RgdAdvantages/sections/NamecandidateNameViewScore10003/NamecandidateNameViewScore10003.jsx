import React from "react";
import styled from "styled-components";

const StyledNamecandidateNameViewScore10003 = styled.div`
  height: 134px;
  left: 492px;
  position: absolute;
  top: 224px;
  width: 366px;

  & .view-18 {
    height: 134px;
    left: 79px;
    position: absolute;
    top: 0;
    width: 289px;
  }

  & .group-3 {
    height: 90px;
    left: 0;
    position: absolute;
    top: 44px;
    width: 291px;
  }

  & .flexcontainer-5 {
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
  }

  & .text-wrapper-16 {
    color: #636363;
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
  }

  & .flexcontainer-6 {
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

  & .text-wrapper-17 {
    color: #000000;
    font-family: "Arial-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0;
  }

  & .text-wrapper-18 {
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

  & .image-6 {
    height: 48px;
    left: 0;
    position: absolute;
    top: -2px;
    width: 55px;
  }
`;

export const NamecandidateNameViewScore10003 = () => {
  return (
    <StyledNamecandidateNameViewScore10003>
      <div className="view-18">
        <div className="group-3">
          <div className="flexcontainer-5">
            <p className="text-3">
              <span className="text-wrapper-16">
                в продуктах и услугах
                <br />
              </span>
            </p>
            <p className="text-3">
              <span className="text-wrapper-16">
                в бизнес-процессах
                <br />
              </span>
            </p>
            <p className="text-3">
              <span className="text-wrapper-16">в коммуникации</span>
            </p>
          </div>
          <div className="flexcontainer-6">
            <p className="text-4">
              <span className="text-wrapper-17">
                ▪<br />
              </span>
            </p>
            <p className="text-4">
              <span className="text-wrapper-17">
                ▪<br />
              </span>
            </p>
            <p className="text-4">
              <span className="text-wrapper-17">▪</span>
            </p>
          </div>
        </div>
        <div className="text-wrapper-18">ТЕХНОЛОГИЧНОСТЬ</div>
      </div>
      <img className="image-6" alt="Image" src="https://psb-eta.vercel.app/rgd/desktop/img/12.svg" />
    </StyledNamecandidateNameViewScore10003>
  );
};
