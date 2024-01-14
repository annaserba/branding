import React from "react";
import { hydrateRoot } from 'react-dom/client';
import { Example } from "./Example";

const div = document.getElementById('example_prod');

hydrateRoot(div, <Example />);
