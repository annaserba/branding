import ReactDOMClient from "react-dom/client";
import { PSBElement } from "./PSBElement";

const div = document.createElement('psb');
import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
const root = createRoot(div);
flushSync(() => {
  root.render(<PSBElement />);
});

if (div && div.childNodes.length > 0) {
    ReactDOMClient.hydrateRoot(div, <PSBElement />);
} else if(div){
    const root = ReactDOMClient.createRoot(div);
    root.render(<PSBElement />);
}