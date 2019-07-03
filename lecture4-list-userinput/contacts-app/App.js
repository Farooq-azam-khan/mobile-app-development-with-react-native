import React from 'react';
import { Button, Text, StyleSheet, SectionList, View } from 'react-native';

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
    this.setState(prevState => ({ contacts: prevState.contacts.sort(compareNames) }))
  }

  renderItem = ({ item }) => (<Row {...item} />)

  // title field matches to title below
  renderSectionHeader = obj => <Text>{obj.section.title}</Text>

  render() {
    return (
      <View style={[styles.container, styles.topPadding]}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title="sort contacts" onPress={this.sort} />
        {/* turnuary operation */}
        {this.state.showContacts && (
          // SectionList: has its own data array, can override the renderItem function with own custom render
          // render section header as well 
          <SectionList
            renderSectionHeader={this.renderSectionHeader}
            sections={[{
              title: 'A',
              data: this.state.contacts
            }
            ]}
            renderItem={this.renderItem}
          />
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
