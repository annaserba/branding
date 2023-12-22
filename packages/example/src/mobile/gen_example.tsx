import React from "react";
import ReactDOMClient from "react-dom/client";
import { Example } from "./Example";

const div = document.getElementById('example_prod');

if (div && div.childNodes.length > 0) {
    ReactDOMClient.hydrateRoot(div, <Example />);
} else if(div){
    const root = ReactDOMClient.createRoot(div);
    root.render(<Example />);
}