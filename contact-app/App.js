import React from 'react';
// import { View } from 'react-native'
import { fetchUsers } from './api'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import contacts from './contacts';

// screens
import AddContactScreen from './screens/AddContactScreen';
import ContactListScreen from './screens/ContactListScreen';
import ContactDetailsScreen from './screens/ContactDetailsScreen';
import LoginScreen from './screens/LoginScreen';
import SettingsScreen from './screens/SettingsScreen'

const MainStack = createStackNavigator({
  ContactList: ContactListScreen,
  ContactDetails: ContactDetailsScreen,
  AddContact: AddContactScreen,
}, {
    initialRouteName: 'ContactList'
  }
)

MainStack.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <Ionicons
      // ${focused ? "" : "-outline"}
      name={`ios-contacts`}
      size={25}
      color={tintColor}
    />
  )
}



const MainTabs = createBottomTabNavigator({
  contacts: MainStack,
  Settings: SettingsScreen,
})

const AppNavigator = createSwitchNavigator({
  Login: LoginScreen,
  Main: MainTabs,
}, {
    initialRouteName: 'Login'
  })


const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  state = {
    contacts: null
  }
  componentDidMount() {
    this.getUsers();
    // fetchUsers()
    // .then(contacts => this.setState({ contacts }));
  }
  getUsers = async () => {
    const results = await fetchUsers();
    this.setState({ contacts: results })
  }
  // fetchUsers = async () => {
  //   const resp = await fetch('https://randomuser.me/api/?nat=us,gb,ca&results=100');
  //   const { results } = await resp.json();
  //   this.setState({ contacts: results });
  //   // fetch('https://randomuser.me/api/?nat=us,gb,ca&results=100')
  //   //   .then((response) => response.json())
  //   //   .then(({ results }) => this.setState({ contacts: results }))
  // }

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }))
  }

  render() {
    return (
      <AppContainer
        screenProps={{
          contacts: this.state.contacts, addContact: this.addContact
        }}
      />

    );
  }
}

