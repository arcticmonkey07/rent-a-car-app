import Car from '../../models/car';

export const SET_CARS = 'SET_CARS';

export const fetchCars = () => {
  return async dispatch => {
    const response = await fetch(
      'https://rent-a-car-app-1c143.firebaseio.com/cars.json'
    );

    const resData = await response.json();

    console.log(resData);

    dispatch({ type: SET_CARS, cars: [] });
  };
};
