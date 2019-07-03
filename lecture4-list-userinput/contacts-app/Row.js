import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Row = props => (
    // <View key={props.key}>
    <View style={styles.row}>
        <Text>{props.name}</Text>
        <Text>{props.phone}</Text>
    </View>
)

const styles = StyleSheet.create({
    row: {
        padding: 20,
    }
})

export default Row; 