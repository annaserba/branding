import React from "react";
import ReactDOMClient from "react-dom/client";
import { RgdL as Rgd } from "../common/screens/RgdL/RgdL";

const div = document.getElementById('rgd_prod');

if (div && div.childNodes.length > 0) {
    ReactDOMClient.hydrateRoot(div, <Rgd />);
} else if(div){
    const root = ReactDOMClient.createRoot(div);
    root.render(<Rgd />);
}

export default (data) => {
  const assets = Object.keys(data.webpackStats.compilation.assets);
  const css = assets.filter(value => value.match(/\.css$/));
  const js = assets.filter(value => value.match(/\.js$/));
  return template({ css, js, ...data});
}