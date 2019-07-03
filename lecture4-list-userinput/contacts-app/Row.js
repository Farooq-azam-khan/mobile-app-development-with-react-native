import React from 'react';
import { View, Text } from 'react-native';
const Row = props => (
    // <View key={props.key}>
    <View>
        <Text>{props.name}</Text>
        <Text>{props.phone}</Text>
    </View>
)

export default Row; 