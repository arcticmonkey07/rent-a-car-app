import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import carsReducer from './store/reducers/cars';
import MainScreen from './screen/rent/MainScreen';
import RentNavigator from './navigation/RentNavigator';

const rootReducer = combineReducers({
  cars: carsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <RentNavigator />
    </Provider>
  );
}
