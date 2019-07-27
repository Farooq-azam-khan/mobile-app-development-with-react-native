import React from 'react';
import { KeyboardAvoidingView, Button, TextInput, View, StyleSheet } from 'react-native';
import propTypes from 'prop-types';
import { Constants } from 'expo-barcode-scanner';

export default class AddContactForm extends React.Component {
    static propTypes = {
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


    getHandler = key => val => {
        this.setState({ [key]: val });
    }


    handlePhoneChange = phone => {
        if (+phone >= 0 && phone.length <= 10) {
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

        this.props.onSubmit(this.state)

    }

    render() {
        return (<KeyboardAvoidingView behavior="padding" style={styles.container}>
            <TextInput
                style={styles.input}
                value={this.state.name}
                onChangeText={this.getHandler('name')}
            />
            <TextInput
                style={styles.input}
                value={this.state.phone}
                onChangeText={this.handlePhoneChange}
                keyboardType="numeric" />
            <Button disabled={!this.state.isFormValid} onPress={this.handleSubmit} title="Add Contact" />
        </KeyboardAvoidingView>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        paddingTop: Constants.statusBarHeight,
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        minWidth: 100,
        marginTop: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3,
    }
})