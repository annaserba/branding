import React from "react";
import styled from "styled-components";

const StyledFooter = styled.p`
  align-self: stretch;
  color: var(--variable-collection-HOVERING);
  font-family: "Arial-Regular", Helvetica;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 11px;
  position: relative;

  & .text-wrapper-49 {
    color: #000000;
  }

  & .text-wrapper-50 {
    color: #999999;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <span className="text-wrapper-49">1</span>
      <span className="text-wrapper-50">
        {" "}
        по данным Всероссийского центра изучения общественного мнения (ВЦИОМ) за 2023 год
        <br />
      </span>
      <span className="text-wrapper-49">2</span>
      <span className="text-wrapper-50">
        {" "}
        10 крупнейших компаний в сфере транспорта и логистики из рейтинга RAEX-600 2022 года
      </span>
    </StyledFooter>
  );
};
