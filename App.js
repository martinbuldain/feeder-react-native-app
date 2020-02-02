import React from 'react';
import { createStore, combineReducers } from 'redux';
import pickersReducer from './store/reducers/dateTimePickers';
import { Provider } from 'react-redux';
import MainApp from './components/MainApp';

const rootReducer = combineReducers({
  pickers: pickersReducer
});

const store = createStore(rootReducer);

export default function App () {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}
