<!-- ```js
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

  const [animals, setAnimals] = useState([
    {name: 'Dog', id: 1},
    {name: 'Cat', id: 2},
    {name: 'Fish', id: 3},
    {name: 'Bear', id: 4},
    {name: 'Wolf', id: 5},
    {name: 'Bird', id: 6},
    {name: 'Snake', id: 7},
    {name: 'Frog', id: 8}
  ])
  
  const pressHandler = (id) => {
    setAnimals((animals) => {
      return animals.filter(animal => animal.id !== id)
    })
  }
```

```js
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
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={animals}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item2}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
</View>
``` -->