import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

import MainScreen from '../screen/rent/MainScreen';
import FiltersScreen from '../screen/rent/FiltersScreen';
import CarDetailScreen from '../screen/rent/CarDetailScreen';

const CarsNavigator = createStackNavigator(
  {
    Main: MainScreen,
    CarDetail: CarDetailScreen,
  },
  {
    navigationOptions: {
    },
  }
);

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
});

const RentNavigator = createDrawerNavigator({
  Cars: CarsNavigator,
  Filters: FiltersNavigator
});

export default createAppContainer(RentNavigator);
