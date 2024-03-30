import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Buttons from './components/Buttons';
import { useState } from 'react';

export default function App() {
  const { value1, setValue } = useState("0");
  
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text value={value1} style={{color: "white"}}>
        </Text>
      </View>

      <View style={styles.row}>
        <Buttons value="C" color="#7D7F7C" />
        <Buttons value="+/-" color="#7D7F7C" />
        <Buttons value="%" color="#7D7F7C" />
        <Buttons value="/" color="#FFAC1C" />
      </View>

      <View style={styles.row}>
        <Buttons value="7" color="#222222" setValue={setValue} />
        <Buttons value="8" color="#222222" setValue={setValue} />
        <Buttons value="9" color="#222222" setValue={setValue} />
        <Buttons value="x" color="#FFAC1C" />
      </View>

      <View style={styles.row}>
        <Buttons value="4" color="#222222" />
        <Buttons value="5" color="#222222" />
        <Buttons value="6" color="#222222" />
        <Buttons value="-" color="#FFAC1C" />
      </View>

      <View style={styles.row}>
        <Buttons value="1" color="#222222" />
        <Buttons value="2" color="#222222" />
        <Buttons value="3" color="#222222" />
        <Buttons value="+" color="#FFAC1C" />
      </View>

      <View style={styles.row}>
        <Buttons value="0" color="#222222" />
        <Buttons value="." color="#222222" />
        <Buttons value="=" color="#FFAC1C" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
