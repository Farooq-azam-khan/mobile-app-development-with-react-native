import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class SettingsScreen extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({ focused, tintColor }) => (
            <Ionicons
                // ${focused ? "" : "-outline"}
                name={`ios-options`}
                size={25}
                color={tintColor}
            />
        )
    }
    render() {
        return (
            <View>
                <Text>Settings</Text>
                <Text styles={{ textAlign: 'center', fontSize: 100, justifyContent: 'center' }}>
                    Coming Soon
                </Text>
            </View>
        )
    }
}