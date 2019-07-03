import React from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';
import propTypes from 'prop-types';

export default class AddContactForm extends React.Component {
    static propTypes = {
        addContact: propTypes.func
    }
    state = {
        name: '',
        phone: ''
    }
    handleNameChange = name => {
        this.setState({ name: name })
    }

    handlePhoneChange = phone => {
        this.setState({ phone: phone })
    }

    render() {
        return (<View style={{ paddingTop: 20 }}>
            <TextInput
                style={styles.input}
                value={this.state.name}
                onChangeText={this.handleNameChange} />
            <TextInput
                style={styles.input}
                value={this.state.phone}
                onChangeText={this.handlePhoneChange}
                keyboardType="numeric" />
            <Button onPress={() => { return 1; }} title="Add Contact" />
        </View>);
    }
}

const styles = StyleSheet.create({
    input: {
        padding: 5,
        borderColor: 'green',
        borderWidth: 1
    }
})