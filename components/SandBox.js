import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function SandBox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // Flex: 0 will only take up the amount of space the container takes up
        // Flex: 1 will take up all available space.
        flex: 1,
        // Default is column
        flexDirection: 'row',
        // Default is flex-start
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 40,
        backgroundColor: '#ddd'
    },
    boxOne: {
        flex: 1,
        backgroundColor: 'blue',
        padding: 10
    },
    boxTwo: {
        flex: 1,
        backgroundColor: 'yellow',
        padding: 20
    },
    boxThree: {
        flex: 1,
        backgroundColor: 'orange',
        padding: 30
    },
    boxFour: {
        flex: 2,
        backgroundColor: 'green',
        padding: 40
    },
})