import React from 'react';
import Server from 'react-dom/server';
import {Count} from './Count';

export const render = () => {
  return Server.renderToString(<Count />);
}

