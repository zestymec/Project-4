import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const [randombg, setRandombg] = useState('#ffffff');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandombg(color);
  };

  return (
    <>
      <StatusBar backgroundColor={randombg} />
      <View style={[styles.conatainer, { backgroundColor: randombg }]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionbutton}>
            <Text>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionbutton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  actionbtnText: {
    fontSize: 30,
    color: 'blue',
    textTransform: 'uppercase',
  },
});