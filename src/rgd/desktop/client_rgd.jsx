import React from "react";
import { hydrateRoot }  from "react-dom/client";
import { RgdL as Rgd } from "../common/screens/RgdL/RgdL";

const div = document.getElementById('rgd_prod');

hydrateRoot(div, <Rgd />);

