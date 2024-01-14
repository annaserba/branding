import React from "react";
import { hydrateRoot } from 'react-dom/client';
import { RgdS as Rgd } from "../common/screens/RgdS/RgdS";

const div = document.getElementById('rgd_prod');

hydrateRoot(div, <Rgd />);
