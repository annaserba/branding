import React from "react";
import ReactDOMClient from "react-dom/client";
import { Rgd } from "./Rgd";

const div = document.getElementById('rgd_prod');

if (div && div.childNodes.length > 0) {
    ReactDOMClient.hydrateRoot(div, <Rgd />);
} else if(div){
    const root = ReactDOMClient.createRoot(div);
    root.render(<Rgd />);
}