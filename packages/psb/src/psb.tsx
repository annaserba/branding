import React from "react";
import ReactDOMClient from "react-dom/client";
import { PSBElement } from "./PSBElement";

const div = document.getElementById('psb_prod');

if (div && div.childNodes.length > 0) {
    ReactDOMClient.hydrateRoot(div, <PSBElement />);
} else if(div){
    const root = ReactDOMClient.createRoot(div);
    root.render(<PSBElement />);
}