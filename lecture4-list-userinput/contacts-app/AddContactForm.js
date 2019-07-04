import React from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';
import propTypes from 'prop-types';

export default class AddContactForm extends React.Component {
    static propTypes = {
        // addContact: propTypes.func,
        onSubmit: propTypes.func
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
    handleSubmit = () => {
        // this.props.onsubmit({name: this.state.name, phone: this.state.phone})
        // this.props.onsubmit({...this.state})
        this.props.onSubmit(this.state)
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
            <Button onPress={this.handleSubmit} title="Add Contact" />
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