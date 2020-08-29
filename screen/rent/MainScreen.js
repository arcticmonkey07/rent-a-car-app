import React, { useEffect ,useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import * as carsActions from '../../store/actions/cars';
import CarItem from '../../components/rent/CarItem';
import HeaderButton from '../../components/UI/HeaderButton';

const MainScreen = (props) => {
  const cars = useSelector((state) => state.cars.availableCars);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(carsActions.fetchCars());
  }, [dispatch]);

  const selectItemHandler = (id, title) => {
    props.navigation.navigate('CarDetail', {
      carId: id,
      carTitle: title,
    });
  };

  return (
    <View>
      <FlatList
        data={cars}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <CarItem
            title={itemData.item.title}
            image={itemData.item.imageUrl}
            price={itemData.item.price}
            onSelect={() => {
              selectItemHandler(itemData.item.id, itemData.item.title);
            }}
          />
        )}
      />
    </View>
  );
};

MainScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Машины в аренду',
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title='Menu'
            iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({});

export default MainScreen;
