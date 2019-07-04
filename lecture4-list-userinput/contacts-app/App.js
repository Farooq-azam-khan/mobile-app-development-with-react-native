import React from 'react';
import { KeyboardAvoidingView, Button, StyleSheet, View } from 'react-native';

import contacts, { compareNames } from './contacts';

import ContactsList from './ContactsList'
import AddContactForm from './AddContactForm';

import { Constants } from 'expo'

export default class App extends React.Component {
  /*
  constructor(props) {
    super(props); 
    this.state = { showContacts: false }
  }
  */
  state = {
    showContacts: false,
    contacts: contacts,
    showForm: false

  }

  toggleContacts = () => {
    // this.setState({ showContacts: !this.state.showContacts })
    this.setState(prevState => ({ showContacts: !prevState.showContacts }));
  }
  toggleForm = () => {
    this.setState(prevState => ({ showForm: !prevState.showForm }))
  }


  sort = () => {
    this.setState(prevState => ({ contacts: prevState.contacts.sort(compareNames) }))
  }

  addContact = newContact => {
    console.log('adding contact')
    this.setState(prevState => ({ showForm: false, contacts: [...prevState.contacts, newContact] }))
  }


  render() {
    if (this.state.showForm) return <AddContactForm onSubmit={this.addContact} />
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        {/* <Button title="sort contacts" onPress={this.sort} /> */}
        <Button title="Add Contact" onPress={this.toggleForm} />
        {this.state.showContacts && (
          <ContactsList
            contacts={this.state.contacts} />
        )
        }
      </KeyboardAvoidingView>

    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  font: {
    fontSize: 40
  },
  button: {
    padding: 1,
    marginTop: 2,
    marginBottom: 2,
    backgroundColor: '#aaaaa'
  }
});
