import React from "react";
import styled from "styled-components";

const StyledElementRaex = styled.p`
  color: var(--variable-collection-HOVERING);
  font-family: "Arial-Regular", Helvetica;
  font-size: 11px;
  font-weight: 400;
  left: 0;
  letter-spacing: 0;
  line-height: 11px;
  position: relative;

  & .text-wrapper-22 {
    color: #000000;
  }

  & .text-wrapper-23 {
    color: #999999;
  }
`;

export const ElementRaex = () => {
  return (
    <StyledElementRaex>
      <span className="text-wrapper-22">1</span>
      <span className="text-wrapper-23">
        {" "}
        по данным Всероссийского центра изучения общественного мнения (ВЦИОМ) за 2023 год
        <br />
      </span>
      <span className="text-wrapper-22">2</span>
      <span className="text-wrapper-23">
        {" "}
        10 крупнейших компаний в сфере транспорта и логистики из рейтинга RAEX-600 2022 года
      </span>
    </StyledElementRaex>
  );
};
