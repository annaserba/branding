import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledComponent1537 = styled.img`
  height: 558px;
  left: 0;
  position: absolute;
  top: 0;
  width:100%;
`;

export const Component1537 = ({
  prop,
  img = "https://psb-eta.vercel.app/rgd/desktop/img/image-4.svg",
  className,
  img1 = "https://psb-eta.vercel.app/rgd/desktop/img/image.svg",
  img2 = "https://psb-eta.vercel.app/rgd/desktop/img/2.svg",
  ITDigital = "https://psb-eta.vercel.app/rgd/desktop/img/it-digital.svg",
  img3 = "https://psb-eta.vercel.app/rgd/desktop/img/image-2.svg"
}) => {
  return (
    <StyledComponent1537
      className={`component-1537 ${className}`}
      alt="Img"
      src={
        prop === "two"
          ? img1
          : prop === "three"
          ? img2
          : prop === "IT-digital"
          ? ITDigital
          : prop === "four"
          ? img3
          : img
      }
    />
  );
};

Component1537.propTypes = {
  prop: PropTypes.oneOf(["IT-digital", "two", "three", "four", "one"]),
  img: PropTypes.string,
  img1: PropTypes.string,
  img2: PropTypes.string,
  ITDigital: PropTypes.string,
  img3: PropTypes.string
};
