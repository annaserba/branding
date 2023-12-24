import React from "react";
import styled from "styled-components";

const StyledNamecandidateNameViewScore10002 = styled.div`
  height: 158px;
  left: 0;
  position: absolute;
  top: 428px;
  width: 367px;

  & .view-17 {
    height: 158px;
    left: 79px;
    position: absolute;
    top: 0;
    width: 290px;
  }

  & .group-2 {
    height: 112px;
    left: 1px;
    position: absolute;
    top: 46px;
    width: 291px;
  }

  & .flexcontainer-3 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 112px;
    left: 17px;
    position: absolute;
    top: 0;
    width: 270px;
  }

  & .p {
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

  & .text-wrapper-13 {
    color: #636363;
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
  }

  & .flexcontainer-4 {
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

  & .text-2 {
    align-self: stretch;
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
  }

  & .text-wrapper-14 {
    color: #000000;
    font-family: "Arial-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0;
  }

  & .text-wrapper-15 {
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

  & .image-5 {
    height: 48px;
    left: -2px;
    position: absolute;
    top: -2px;
    width: 53px;
  }
`;

export const NamecandidateNameViewScore10002 = () => {
  return (
    <StyledNamecandidateNameViewScore10002>
      <div className="view-17">
        <div className="group-2">
          <div className="flexcontainer-3">
            <p className="p">
              <span className="text-wrapper-13">
                о людях
                <br />
              </span>
            </p>
            <p className="p">
              <span className="text-wrapper-13">
                об экологии
                <br />
              </span>
            </p>
            <p className="p">
              <span className="text-wrapper-13">о благополучии (здоровье, семья, дом, отдых, спорт)</span>
            </p>
          </div>
          <div className="flexcontainer-4">
            <p className="text-2">
              <span className="text-wrapper-14">
                ▪<br />
              </span>
            </p>
            <p className="text-2">
              <span className="text-wrapper-14">
                ▪<br />
              </span>
            </p>
            <p className="text-2">
              <span className="text-wrapper-14">▪</span>
            </p>
          </div>
        </div>
        <div className="text-wrapper-15">ЗАБОТА</div>
      </div>
      <img className="image-5" alt="Image" src="https://psb-eta.vercel.app/rgd/desktop/img/13.svg" />
    </StyledNamecandidateNameViewScore10002>
  );
};
