import React from "react";
import styled from "styled-components";

const StyledProperty101 = styled.svg`
  .path {
    fill: #e21a1a;
  }
`;

export const Property101 = ({ className }) => {
  return (
    <StyledProperty101
      className={`property-1-01 ${className}`}
      fill="none"
      height="7"
      viewBox="0 0 93 7"
      width="93"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M20.9832 6.81633V0L-0.000112534 0V6.81633L20.9832 6.81633Z" fill="#E21A1A" />
      <path className="path" d="M38.9778 6.81633V0L31.9834 0V6.81633H38.9778Z" fill="#D9D9D9" />
      <path className="path" d="M56.9722 6.81633V0L49.9777 0V6.81633H56.9722Z" fill="#D9D9D9" />
      <path className="path" d="M74.9666 6.81633V0L67.9721 0V6.81633H74.9666Z" fill="#D9D9D9" />
      <path className="path" d="M92.9609 6.81633V0L85.9665 0V6.81633H92.9609Z" fill="#D9D9D9" />
    </StyledProperty101>
  );
};
