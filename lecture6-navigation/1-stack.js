import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Constants from 'expo-constants';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
const randomNumber = () => {
    return Math.floor(10 * Math.random()) + 1;
}
class ScreenComponentOne extends React.Component {
    static navigationOptions = {
        headerTitle: "First Screen",
        headerTintColor: 'teal',
        headerStyle: {
            backgroundColor: '#f4f4f4'
        }
    }
    render() {
        return (
            <View style={[styles.container, styles.screen1]}>
                <Button title="go to screen two"
                    onPress={() => {
                        this.props.navigation.navigate('RouteScreenTwo')
                    }} />
                <Button title="go to screen three"
                    onPress={() => this.props.navigation.navigate('RouteScreenThree', {
                        number: randomNumber()
                    })}
                />
            </View>
        )
    }
}

class ScreenComponentTwo extends React.Component {
    // static navigationOptions = {
    //   headerTitle: "Second Screen", 
    //   headerTintColor: 'orange'
    // }
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Screen Two",
            headerTintColor: 'orange',
            headerRight: <Button title="Next Screen" onPress={() => navigation.navigate('RouteScreenThree', { number: 11 })} />
        }
    }
    render() {
        return (
            <View style={[styles.container, styles.screen2]}>
                <Button style={styles.screen1} title="go to screen one"
                    onPress={() => this.props.navigation.navigate('RouteScreenOne')}
                />
                <Button style={styles.screen1} title="go to screen three"
                    onPress={() => this.props.navigation.navigate('RouteScreenThree', {
                        number: randomNumber()
                    })}
                />
            </View>
        )
    }
}

class ScreenComponentThree extends React.Component {
    // static navigationOptions = {
    //   headerTitle: "Screen Three", 
    //   headerTintColor: "purple"
    // }
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: `Screen Three: ${navigation.getParam('number')}`,
            headerTintColor: "purple"
        }
    }

    render() {
        return (
            <View styles={styles.container}>
                <Text style={styles.paragraph}>{this.props.navigation.getParam('number')} </Text>
                <Button
                    onPress={() => this.props.navigation.navigate('RouteScreenThree', { number: randomNumber() })}
                    title="New Number"
                />
                <Button onPress={() => this.props.navigation.goBack()} title="go back" />
            </View>
        )
    }
}

const AppNavigator = createStackNavigator({
    "RouteScreenOne": ScreenComponentOne,
    "RouteScreenTwo": ScreenComponentTwo,
    "RouteScreenThree": ScreenComponentThree
})

export default createAppContainer(AppNavigator);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        borderWidth: 25,
    },
    paragraph: {
        fontSize: 25,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    screen1: {
        borderColor: 'teal',
    },
    screen2: {
        borderColor: 'orange',
    },
});
