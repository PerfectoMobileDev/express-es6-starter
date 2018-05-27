import Oy from 'oy-vey';
import React from 'react';

import {HelloWorldEmail} from './HelloWorldEmail.jsx';



export const getMail3 = () => {
  return Oy.renderTemplate(<HelloWorldEmail />, {
    title: 'This is an example',
    previewText: 'This is an example'
  });
};
