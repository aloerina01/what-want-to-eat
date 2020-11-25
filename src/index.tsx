import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import liff from '@line/liff';
import { App } from './App';

liff.init({ liffId: '1654302088-rB1Ab9ad' });
const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </BrowserRouter>,
  rootElement
);
