import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

class ScreenComponentOne extends React.Component {
  render() {
    return (
      <View style={styles.container1}>
        <Button title="go to screen two" 
        onPress={()=>{
          this.props.navigation.navigate('RouteScreenTwo')
        }} />
      </View>
    )
  }
}

class ScreenComponentTwo extends React.Component {
  render() {
    return (
      <View style={styles.container2}>
      <Button title="go to screen one" 
      onPress={() => this.props.navigation.navigate('RouteScreenOne')}
      />
      </View>
    )
  }
}
const AppNavigator = createSwitchNavigator({
  "RouteScreenOne": ScreenComponentOne, 
  "RouteScreenTwo": ScreenComponentTwo
})

export default createAppContainer(AppNavigator);


const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'teal',
    padding: 8,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'orange',
    padding: 8,
  },
});

