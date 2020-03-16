import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function AddTodo({addTodo}) {
    const [text, setText] = useState('')

    const changeHandler = (val) => {
        setText(val)
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='New To Do...'
                onChangeText={changeHandler}
            />
            <Button
                color='blue'
                title='Add To Do'
                onPress={() => addTodo(text)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 2,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})