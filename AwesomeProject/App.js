import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Buttons from './components/Buttons';
import { useState } from 'react';

export default function App() {
  const [ value1, setValue ] = useState("");
  
  return (
    <View style={styles.container}>
      <View style={styles.rowDisplay}>
        <Text value={value1} style={{ color: 'white', textAlign: "right" }}>
          {value1}
        </Text>
      </View>

      <View style={styles.row}>
        <Buttons value="C" color="#7D7F7C" setValue={setValue} />
        <Buttons value="+/-" color="#7D7F7C" setValue={setValue} />
        <Buttons value="%" color="#7D7F7C" setValue={setValue} />
        <Buttons value="/" color="#FFAC1C" setValue={setValue} />
      </View>

      <View style={styles.row}>
        <Buttons value="7" color="#222222" setValue={setValue} />
        <Buttons value="8" color="#222222" setValue={setValue} />
        <Buttons value="9" color="#222222" setValue={setValue} />
        <Buttons value="x" color="#FFAC1C" setValue={setValue} />
      </View>

      <View style={styles.row}>
        <Buttons value="4" color="#222222" setValue={setValue} />
        <Buttons value="5" color="#222222" setValue={setValue} />
        <Buttons value="6" color="#222222" setValue={setValue} />
        <Buttons value="-" color="#FFAC1C" setValue={setValue} />
      </View>

      <View style={styles.row}>
        <Buttons value="1" color="#222222" setValue={setValue} />
        <Buttons value="2" color="#222222" setValue={setValue} />
        <Buttons value="3" color="#222222" setValue={setValue} />
        <Buttons value="+" color="#FFAC1C" setValue={setValue} />
      </View>

      <View style={styles.row}>
        <Buttons value="0" color="#222222" setValue={setValue} />
        <Buttons value="." color="#222222" setValue={setValue} />
        <Buttons value="=" color="#FFAC1C" setValue={setValue} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'blue'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowDisplay: {
    flexDirection: 'row',
    justifyContent:"flex-end",
    width: '20%',
    marginBottom: 10,
    //backgroundColor: "red"
  }
});
