import React from 'react'
import { View, Button, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import ContactsList from '../ContactsList';
import { compareNames } from '../contacts';

export default class ContactListScreen extends React.Component {
    state = {
        showContacts: false,
    }


    sort = () => {
        this.setState(prevState => ({ contacts: prevState.contacts.sort(compareNames) }))
    }

    toggleContacts = () => {
        this.setState(prevState => ({ showContacts: !prevState.showContacts }));
    }
    showForm = () => {
        this.props.navigation.navigate('AddContact');
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Toggle Contacts" onPress={this.toggleContacts} />
                <Button title="Toggle Form" onPress={this.showForm} />
                {console.log(this.props.screenProps.contacts)}
                {this.state.showContacts && <ContactsList contacts={this.props.screenProps.contacts} />}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        alignItems: 'center',
    }
})
