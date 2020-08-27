import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, Image, StyleSheet } from 'react-native';

const CarDetailScreen = (props) => {
  const carId = props.navigation.getParam('carId');
  const selectedCar = useSelector((state) =>
    state.cars.availableCars.find((car) => car.id === carId)
  );

  return (
    <View>
      <Image style={styles.image} source={{ uri: selectedCar.imageUrl }} />
      <Text>{selectedCar.title}</Text>
    </View>
  );
};

CarDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam('carTitle'),
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  }
});

export default CarDetailScreen;
