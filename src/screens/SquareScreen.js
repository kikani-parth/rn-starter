import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;
const COLOR_DECREMENT = -15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        break;

      case 'green':
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        break;

      case 'blue':
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        break;

      default:
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        color="Red"
        increase={() => setColor('red', COLOR_INCREMENT)}
        decrease={() => setColor('red', COLOR_DECREMENT)}
      />
      <ColorCounter
        color="Green"
        increase={() => setColor('green', COLOR_INCREMENT)}
        decrease={() => setColor('green', COLOR_DECREMENT)}
      />
      <ColorCounter
        color="Blue"
        increase={() => setColor('blue', COLOR_INCREMENT)}
        decrease={() => setColor('blue', COLOR_DECREMENT)}
      />

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
