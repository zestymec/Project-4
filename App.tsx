import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Box from './box';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

const App = () => {
  const [randombg, setRandombg] = useState('pink');
  const [b1, setB1] = useState('#bfffff');
  const [b2, setB2] = useState('#ff4ffb');
  const [b3, setB3] = useState('#bfffaf');
  const [b4, setB4] = useState('#ffafff');
  const [b5, setB5] = useState('#fbffbf');
  const [b6, setB6] = useState('#ffafbf');
  const [b7, setB7] = useState('#bffaff');
  const [b8, setB8] = useState('#faffbf');
  const [btnColor, setBtnColor] = useState("red");

  const getRandomColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: true, 
  };
  const handlePress = () => {
    console.log("abc")
    ReactNativeHapticFeedback.trigger("impactHeavy", options);
    setRandombg(getRandomColor());
    setB1(getRandomColor());
    setB2(getRandomColor());
    setB3(getRandomColor());
    setB4(getRandomColor());
    setB5(getRandomColor());
    setB6(getRandomColor());
    setB7(getRandomColor());
    setB8(getRandomColor());
    setBtnColor(getRandomColor());
  };

  return (
    <View style={[styles.conatainer, { backgroundColor: randombg }]}>
      <StatusBar backgroundColor={randombg} />

      <Text style={styles.title}>Color Magic ✨</Text>

      <View style={styles.boxesArea}>
        <Box name='Box 1' style={{ backgroundColor: b1 }} />
        <Box name='Box 2' style={{ backgroundColor: b2 }} />
        <Box name='Box 3' style={{ backgroundColor: b3 }} />
        <Box name='Box 4' style={{ backgroundColor: b4 }} />
        <Box name='Box 5' style={{ backgroundColor: b5 }} />
        <Box name='Box 6' style={{ backgroundColor: b6 }} />
        <Box name='Box 7' style={{ backgroundColor: b7 }} />
        <Box name='Box 8' style={{ backgroundColor: b8 }} />
      </View>

      <TouchableOpacity onPress={handlePress}>
        <View style={[styles.actionbutton, { backgroundColor: btnColor }]}>
          <Text style={styles.btnText}>Change Colors</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>POWERED by Umer the Hero</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  boxesArea: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 15,
    padding: 10,
    marginBottom: 30,
  },
  actionbutton: {
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    elevation: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  }
});