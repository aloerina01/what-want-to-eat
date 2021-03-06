import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { App } from './App';
require('dotenv').config();

if (process.env.DEBUG === 'true') {
  console.log('!!! Development build !!!');
}

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </RecoilRoot>
  </BrowserRouter>,
  rootElement
);
