import React from "react";
import styled from "styled-components";

const StyledFootterMobile = styled.div`
  height: 49px;
  position: relative;
  width: 300px;

  & .flexcontainer-2 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 49px;
    position: relative;
    top: -1px;
    width: 300px;
  }

  & .text-2 {
    align-self: stretch;
    color: var(--variable-collection-HOVERING-duplicate);
    font-family: "Arial-Regular", Helvetica;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 11px;
    position: relative;
  }

  & .text-wrapper-25 {
    color: #000000;
  }

  & .text-wrapper-26 {
    color: #999999;
  }
`;

export const FootterMobile = () => {
  return (
    <StyledFootterMobile>
      <div className="flexcontainer-2">
        <p className="text-2">
          <span className="text-wrapper-25">1</span>
          <span className="text-wrapper-26">
            {" "}
            по данным Всероссийского центра изучения общественного мнения (ВЦИОМ) за 2023 год
            <br />
          </span>
        </p>
        <p className="text-2">
          <span className="text-wrapper-25">2</span>
          <span className="text-wrapper-26">
            {" "}
            10 крупнейших компаний в сфере транспорта и логистики из рейтинга RAEX-600 2022 года
          </span>
        </p>
      </div>
    </StyledFootterMobile>
  );
};
