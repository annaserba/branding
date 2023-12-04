import ReactDOMClient from "react-dom/client";
import { PSBElement } from "./PSBElement";

const psbElement = document.getElementById("psb");

if (psbElement && psbElement.childNodes.length > 0) {
    ReactDOMClient.hydrateRoot(psbElement, <PSBElement />);
} else if(psbElement){
    const root = ReactDOMClient.createRoot(psbElement);
    root.render(<PSBElement />);
}