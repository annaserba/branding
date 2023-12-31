import React from "react";
import ReactDOMClient from "react-dom/client";
import { RgdS as Rgd } from "../common/screens/RgdS/RgdS";

const div = document.getElementById('example_prod');

if (div && div.childNodes.length > 0) {
    ReactDOMClient.hydrateRoot(div, <Rgd />);
} else if(div){
    const root = ReactDOMClient.createRoot(div);
    root.render(<Rgd />);
}