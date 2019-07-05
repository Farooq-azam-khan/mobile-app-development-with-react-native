import React from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';
import propTypes from 'prop-types';
import { Constants } from 'expo-barcode-scanner';

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

    // handleNameChange = name => {
    //     // this.setState({ name }, this.validateForm);
    //     this.setState({ name });
    // }
    // handleNameChange = this.getHandler('name');
    // handlePhoneChange = this.getHandler('phone');

    // returns a function (val => {...})
    // getHandler = key => {
    //     return val => {
    //         this.setState({ [key]: val })
    //     }
    // }
    getHandler = key => val => {
        this.setState({ [key]: val });
    }
    // handlePhoneChange = phoneVal => {

    //     if (+phone >= 0 && phone.length <= 10) {
    //         this.getHandler('phone')(phoneVal);
    //     }
    // }


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
        return (<View style={styles.container}>
            <TextInput
                style={styles.input}
                value={this.state.name}
                // onChangeText={this.handleNameChange}
                onChangeText={this.getHandler('name')}
            />
            <TextInput
                style={styles.input}
                value={this.state.phone}
                onChangeText={this.handlePhoneChange}
                // onChangeText={this.getHandler('phone')}
                keyboardType="numeric" />
            <Button disabled={!this.state.isFormValid} onPress={this.handleSubmit} title="Add Contact" />
        </View>);
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