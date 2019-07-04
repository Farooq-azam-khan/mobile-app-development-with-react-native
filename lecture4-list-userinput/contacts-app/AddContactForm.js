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
        phone: '',
        isFormValid: false
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.name !== prevState.name || this.state.phone !== prevState.phone) {
            this.validateForm();
        }
    }

    handleNameChange = name => {
        // this.setState({ name }, this.validateForm);
        this.setState({ name });
    }

    handlePhoneChange = phone => {
        // +"abc" will try to cast to number else get NaN
        if (+phone >= 0 && phone.length <= 10) {
            // this.setState({ phone }, this.validateForm);
            this.setState({ phone });
        }
    }
    validateForm = () => {
        if (this.state.name && +this.state.phone >= 0 && this.state.phone.length === 10 && this.state.name.length >= 3) {
            this.setState({ isFormValid: true });
        } else {
            this.setState({ isFormValid: false });
        }
    }
    handleSubmit = () => {
        // this.props.onsubmit({name: this.state.name, phone: this.state.phone})
        // this.props.onsubmit({...this.state}))

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
            <Button disabled={!this.state.isFormValid} onPress={this.handleSubmit} title="Add Contact" />
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