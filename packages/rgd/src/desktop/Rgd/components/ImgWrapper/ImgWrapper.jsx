import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledImgWrapper = styled.img`
  height: 659px;
  left: 0;
  position: absolute;
  top: 0;
  width:100%;
`;

export const ImgWrapper = ({ prop, className, element = "https://psb-eta.vercel.app/rgd/desktop/img/1-3.svg" }) => {
  return <StyledImgWrapper className={`img-wrapper ${className}`} alt="Element" src={element} />;
};

ImgWrapper.propTypes = {
  prop: PropTypes.oneOf(["thirteen"]),
  element: PropTypes.string,
};
