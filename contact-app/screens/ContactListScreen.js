import React from 'react'
import { View, Button, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import ContactsList from '../ContactsList';
import { compareNames } from '../contacts';

export default class ContactListScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Contacts",
            headerRight: <Button title="Add Contact" onPress={() => navigation.navigate('AddContact')} />
        }
    }

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

    handleSelectContact = (contact) => {
        this.setState({ showContacts: false })
        this.props.navigation.navigate('ContactDetails', contact);
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Toggle Contacts" onPress={this.toggleContacts} />
                {/* <Button title="Toggle Form" onPress={this.showForm} /> */}
                {/* {this.state.showContacts &&  <ContactsList contacts={this.props.screenProsp.contacts}}}*/}
                {this.state.showContacts && <ContactsList
                    onSelectContact={this.handleSelectContact}
                    // onSelectContact={(contact) => this.props.navigation.navigate('ContactDetails')}
                    contacts={this.props.screenProps.contacts}
                />}

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
