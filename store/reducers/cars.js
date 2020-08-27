import CARS from '../../data/Cars';
import Car from '../../models/car';

const initialState = {
  availableCars: CARS,
};

export default (state = initialState, action) => {
  return state;
};
