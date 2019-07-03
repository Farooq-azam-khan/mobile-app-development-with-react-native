import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

import contacts from './contacts';


const Row = props => (
  <View key={props.key}>
    <Text>{props.name}</Text>
    <Text>{props.phone}</Text>
  </View>
)

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
          {contacts.map(contact => (
            <Row key={contact.key} phone={contact.phone} name={contact.name} />
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
