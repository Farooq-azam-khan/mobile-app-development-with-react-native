import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

import contacts from './contacts';

import Row from './Row';

export default class App extends React.Component {
  /*
  constructor(props) {
    super(props); 
    this.state = { showContacts: false }
  }
  */
  state = {
    showContacts: false,
  }

  toggleContacts = () => {
    // this.setState({ showContacts: !this.state.showContacts })
    this.setState(prevState => ({ showContacts: !prevState.showContacts }));
  }

  render() {
    if (this.state.showContacts) {
      return (
        <View style={[styles.container, styles.paddingTop]}>
          <Button title="toggle contacts" onPress={this.toggleContacts} />
          <ScrollView>
            {contacts.map(contact => (
              // <Row key={contact.key} phone={contact.phone} name={contact.name} />
              <Row key={contact.key} {...contact} />
            ))}
          </ScrollView>
        </View>

      );
    } else {
      return (
        <View style={[styles.container, styles.paddingTop]}>
          <Button title="toggle contacts" onPress={this.toggleContacts} />

        </View>

      );
    }

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
