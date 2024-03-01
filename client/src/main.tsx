import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/styles.scss';
import {Provider} from "react-redux";
//store
import { store, persistedStore } from "./redux/store";
import TheCat from "./app/TheCat";
import {PersistGate} from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistedStore}>
            <TheCat />
        </PersistGate>
      </Provider>
  </React.StrictMode>,
)