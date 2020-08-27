import React from 'react';
import { View, Text, Image, StyleSheet, TouchableNativeFeedback } from 'react-native';

const CarItem = (props) => {
  return (
    <TouchableNativeFeedback onPress={props.onSelect}>
      <View style={styles.carItem}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.image }} />
        </View>
        <Text>{props.title}</Text>
        <Text>от {props.price} в день</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  carItem: {
    height: 230,
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  imageContainer: {
    width: '100%',
    height: '80%',
    marginVertical: 5
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default CarItem;
