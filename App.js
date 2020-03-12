import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('Cam');

  const clickHandler = () => {
    setName(name === 'Cam' ? 'CamRon' : 'Cam')
  }

  return (
    <View style={styles.container}>
      <Text>What is up {name}?</Text>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={clickHandler}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  }
});
