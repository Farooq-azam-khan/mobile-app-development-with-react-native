import React from 'react';
import { View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import contacts from './contacts';

// screens
import AddContactScreen from './screens/AddContactScreen';
import ContactListScreen from './screens/ContactListScreen';

const AppNavigator = createSwitchNavigator({
  AddContact: AddContactScreen,
  ContactList: ContactListScreen
}, {
    initialRouteName: 'ContactList'
  }
)
const AppContainer = createAppContainer(AppNavigator);



export default class App extends React.Component {
  state = {
    contacts: contacts
  }

  addContact = newContact => {
    console.log('adding contact')
    this.setState(prevState => ({ showForm: false, contacts: [...prevState.contacts, newContact] }))
  }

  render() {
    return (<AppContainer screenProps={{ contacts: this.state.contacts, addContact: this.addContact }} />);
  }
}


