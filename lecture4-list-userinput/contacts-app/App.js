import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

import contacts from './contacts';


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
    return (
      <View style={[styles.container, styles.paddingTop]}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <ScrollView>
          {contacts.map((contact) => (
            <View key={contact.key}>
              <Text>{contact.name}</Text>
              <Text>{contact.phone}</Text>
            </View>
          ))}
        </ScrollView>
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
