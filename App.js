import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [name, setName] = useState('Cam');
  const [food, setFood] = useState('Pizza');
  const [age, setAge] = useState(26);
  const [color, setColor] = useState('Blue')

  const clickHandler = () => {
    setColor(color === 'Blue' ? 'Green' : 'Blue')
  }

  const [colors, setColors] = useState([
    {name: 'Red', id: 1},
    {name: 'Orange', id: 2},
    {name: 'Yellow', id: 3},
    {name: 'Green', id: 4},
    {name: 'Blue', id: 5},
    {name: 'Indigo', id: 6},
    {name: 'Violet', id: 7},
    {name: 'Black', id: 8}
  ])
  
  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput 
        style={styles.input}
        placeholder='ex: Bobbo'
        onChangeText={(val) => setName(val)}/>
      <Text>Change Favorite Food:</Text>
      <TextInput 
        style={styles.input}
        placeholder='ex: pizza'
        onChangeText={(val) => setFood(val)}/>
      <Text>Change Age:</Text>
      <TextInput
        keyboardType='numeric'
        style={styles.input}
        placeholder='ex: 22'
        onChangeText={(val) => setAge(val)}/>

      <Text>My name is {name}, age: {age}, fav food: {food}</Text>
      <Text>My favorite color: {color}</Text>
      <View style={styles.buttonContainer}>
        <Button title="update color" onPress={clickHandler}/>
      </View>
      <ScrollView>
        {colors.map(color => (
          <View key={color.id}>
            <Text style={styles.item}>{color.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 20
  },
  buttonContainer: {
    backgroundColor: 'cyan',
    padding: 10,
    margin: 10
  },
  input: {
    borderWidth: 1,
    borderColor: 'blue',
    padding: 8,
    margin: 10,
    width: 200
  },
  item: {
    padding: 30,
    fontSize: 24,
    backgroundColor: '#BADA22',
    marginTop: 10
  }
});
