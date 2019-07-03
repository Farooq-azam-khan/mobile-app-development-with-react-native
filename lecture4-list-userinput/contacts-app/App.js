import React from 'react';
import { Button, ScrollView, StyleSheet, FlatList, View } from 'react-native';

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
    return (
      <View style={[styles.container, styles.paddingTop]}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        {/* turnuary operation */}
        {this.state.showContacts && (
          // Flatlist: Pass an array of data and renderItem function as props
          <FlatList
            data={contacts}
            renderItem={obj => <Row {...obj.item} />} />)
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
