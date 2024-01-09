import React from "react";
import styled from "styled-components";

const StyledPeople = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 35px;
  position: relative;
  width: 100%;

  & .people-banner {
    height: 715.29px;
    position: relative;
    width: 100%;
  }

  & .overlap-group-5 {
    height: 715px;
    position: relative;
  }

  & .element-png-wrapper {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/bg.svg);
    background-size: cover;
    height: 715px;
  }

  & .element-png {
    height: 403px;
    left: 191px;
    object-fit: cover;
    position: absolute;
    top: 312px;
    width: 869px;
  }

  & .texts-2 {
    align-items: flex-start;
    display: inline-flex;
    flex-direction: column;
    gap: 37px;
    left: 45px;
    position: absolute;
    top: 50px;
  }

  & .text-wrapper-39 {
    color: var(--variable-collection-BLACK);
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    margin-top: -1px;
    position: relative;
    width: 590px;
  }

  & .frame-2 {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 46px;
    position: relative;
  }

  & .div-4 {
    color: transparent;
    font-family: "Arial-Regular", Helvetica;
    font-size: 28px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    width: 544px;
  }

  & .text-wrapper-40 {
    color: #000000;
  }

  & .text-wrapper-41 {
    color: #e21a1a;
  }

  & .flexcontainer-9 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 547px;
  }

  & .text-9 {
    align-self: stretch;
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Regular", Helvetica;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
  }

  & .text-wrapper-42 {
    color: #000000;
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
  }

  & .join-link {
    height: 23px;
    position: relative;
    width: 267px;
  }

  & .text-wrapper-43 {
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

  & .vector-3 {
    height: 12px;
    left: 259px;
    position: absolute;
    top: 6px;
    width: 7px;
  }
`;

export const People = () => {
  return (
    <StyledPeople>
      <div className="people-banner">
        <div className="overlap-group-5">
          <div className="element-png-wrapper">
            <img className="element-png" alt="Element png" src="https://psb-eta.vercel.app/rgd/desktop/img/02-png.png" />
          </div>
          <div className="texts-2">
            <p className="text-wrapper-39">/ В РЖД РАБОТАЮТ ЛЮДИ ДЕЛА</p>
            <div className="frame-2">
              <p className="div-4">
                <span className="text-wrapper-40">
                  Основа нашей компании,ее главный актив и наибольшая ценность –{" "}
                </span>
                <span className="text-wrapper-41">это люди</span>
              </p>
              <div className="flexcontainer-9">
                <p className="text-9">
                  <span className="text-wrapper-40">Реальные</span>
                  <span className="text-wrapper-42">
                    {" "}
                    дела лежат в основе всей нашей деятельности, они наполняют ее смыслом.
                    <br />
                  </span>
                </p>
                <p className="text-9">
                  <span className="text-wrapper-42">А это значит, что в РЖД работают</span>
                  <span className="text-wrapper-40"> те, кто </span>
                  <span className="text-wrapper-41">любит дело</span>
                  <span className="text-wrapper-40">,для кого жизненно важно идти вперед и приносить пользу.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="join-link">
        <div className="text-wrapper-43">присоединиться к команде</div>
        <img className="vector-3" alt="Vector" src="https://psb-eta.vercel.app/rgd/desktop/img/vector-23.svg" />
      </div>
    </StyledPeople>
  );
};
