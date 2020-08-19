import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { StoreContext } from 'redux-react-hook';
import Root from './views/root';
// import { BrowserRouter } from 'react-router-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import { LocalStateProvider } from './context';
import reducer, { initialState } from "ui/utils/reducer";

(async () => {
  if (process.env.NODE_ENV === 'production') {
    OfflinePluginRuntime.install();
  }

  const mountNode = document.getElementById('root');

  if (!mountNode) return;

  ReactDOM.render(
    // <StoreContext.Provider value={store}>
    //   <BrowserRouter>
    //     <Root />
    //   </BrowserRouter>
    // </StoreContext.Provider>,
    <LocalStateProvider initialState={initialState} reducer={reducer}>
      <Root />
    </LocalStateProvider>,
    mountNode,
  );
})();
