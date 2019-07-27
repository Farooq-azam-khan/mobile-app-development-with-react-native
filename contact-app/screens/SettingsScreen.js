import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
            <View style={styles.container}>
                <Text style={styles.paragraph}>Settings</Text>
                <Text style={styles.paragraph}>
                    Coming Soon
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    paragraph: {
        textAlign: 'center',
        fontSize: 50,
    }
})