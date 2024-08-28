import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const firstName = 'Parth';
  return (
    <View>
      <Text style={styles.HeaderStyle}>Getting started with React Native!</Text>
      <Text style={styles.subHeaderStyle}>My name is {firstName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
