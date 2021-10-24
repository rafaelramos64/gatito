import React, { useEffect, useState } from 'react';
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import Router from './src/router';
import Default from './src/components/default';
import { store } from './src/store';

import { Provider } from "react-redux"


export default function App() {
  return (
    <Provider store={store}>
      <Default>
        <Router />
      </Default>
    </Provider>
  )
}
