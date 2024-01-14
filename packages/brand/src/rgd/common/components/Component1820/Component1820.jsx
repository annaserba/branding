import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledComponent1820 = styled.img`
  height: 558px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1250px;
`;

export const Component1820 = ({
  prop,
  img = "https://psb-eta.vercel.app/rgd/desktop/img/image-3.svg",
  className,
  img1 = "https://psb-eta.vercel.app/rgd/desktop/img/image.svg",
  img2 = "https://psb-eta.vercel.app/rgd/desktop/img/1.svg",
  ITDigital = "https://psb-eta.vercel.app/rgd/desktop/img/it-digital.svg",
  img3 = "https://psb-eta.vercel.app/rgd/desktop/img/image-2.svg",
}) => {
  return (
    <StyledComponent1820
      className={`component-1820 ${className}`}
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

Component1820.propTypes = {
  prop: PropTypes.oneOf(["IT-digital", "two", "three", "four", "one"]),
  img: PropTypes.string,
  img1: PropTypes.string,
  img2: PropTypes.string,
  ITDigital: PropTypes.string,
  img3: PropTypes.string,
};
