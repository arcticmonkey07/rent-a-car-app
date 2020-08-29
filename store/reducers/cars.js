import CARS from '../../data/Cars';
import Car from '../../models/car';
import SET_CARS from '../actions/cars';

const initialState = {
  availableCars: CARS,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CARS:
      return {
        availableCars: action.cars,
      };
  }
  return state;
};
