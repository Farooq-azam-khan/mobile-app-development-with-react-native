import React from 'react';
import AddContactForm from '../AddContactForm';

export default class AddContactScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Add Contact Form"
        }
    }
    handleSubmit = formState => {
        this.props.screenProps.addContact(formState);
        this.props.navigation.navigate('ContactList');
    }

    render() {
        return (
            <AddContactForm onSubmit={this.handleSubmit} />
        );
    }
}