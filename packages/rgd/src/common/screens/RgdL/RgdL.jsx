import React from "react";
import styled from "styled-components";
import { Adventiges } from "./sections/Adventiges";
import { Begin } from "./sections/Begin";
import { Footer } from "./sections/Footer";
import { Map } from "./sections/Map";
import { People } from "./sections/People";
import { Principies } from "./sections/Principies";
import { Vectors } from "./sections/Vectors/Vectors";
import { We } from "./sections/We";

const StyledHhL = styled.div`
  align-items: flex-start;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 123px;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const RgdL = () => {
  return (
    <StyledHhL>
      <Begin />
      <We />
      <People />
      <Adventiges />
      <Principies />
      <Vectors />
      <Map />
      <Footer />
    </StyledHhL>
  );
};