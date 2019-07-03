import React from 'react';
import { Button, ScrollView, StyleSheet, FlatList, View } from 'react-native';

import contacts, { compareNames } from './contacts';

import Row from './Row';
// import console = require('console');

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
    console.log('sorting')
    return this.setState(prevState => ({
      contacts: [...prevState.contacts].sort(compareNames)
    }));
  }

  renderItem = obj => <Row {...(obj.item)} />

  render() {
    return (
      <View style={[styles.container, styles.topPadding]}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title="sort contacts" onPress={this.sort} />
        {/* turnuary operation */}
        {this.state.showContacts && (
          // Flatlist: Pass an array of data and renderItem function as props
          <FlatList
            data={this.state.contacts}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()} />
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
