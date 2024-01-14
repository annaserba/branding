import React from 'react';
import Server from 'react-dom/server';
import { RgdS as Rgd } from "../common/screens/RgdS/RgdS";
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

const sheet = new ServerStyleSheet();
 const html = Server.renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <Rgd />
    </StyleSheetManager>
  );

export const render = () => {
   
  return html;
}

export const styles = () => {
  const styleTags = sheet.getStyleTags(); 
  return styleTags
}
