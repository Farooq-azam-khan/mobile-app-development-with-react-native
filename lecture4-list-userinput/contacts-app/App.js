import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import contacts, { compareNames } from './contacts';

import ContactsList from './ContactsList'

export default class App extends React.Component {
  /*
  constructor(props) {
    super(props); 
    this.state = { showContacts: false }
  }
  */
  state = {
    showContacts: false,
    contacts: contacts
  }

  toggleContacts = () => {
    // this.setState({ showContacts: !this.state.showContacts })
    this.setState(prevState => ({ showContacts: !prevState.showContacts }));
  }


  sort = () => {
    this.setState(prevState => ({ contacts: prevState.contacts.sort(compareNames) }))
  }


  render() {
    return (
      <View style={[styles.container, styles.topPadding]}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title="sort contacts" onPress={this.sort} />
        {this.state.showContacts && (
          <ContactsList
            contacts={this.state.contacts} />
        )
        }
      </View>

    );

  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  font: {
    fontSize: 40
  },
  topPadding: {
    paddingTop: 40
  }
});
