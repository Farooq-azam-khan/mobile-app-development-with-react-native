import React from 'react';
import { View, Button, TextInput, StyleSheet, Text } from 'react-native'
import { login } from '../api';

export default class LoginScreen extends React.Component {
    state = {
        username: "",
        password: ""
    }
    handleUsernameUpdate = (username) => {
        this.setState({ username })
    }
    handlePasswordUpdate = (password) => {
        this.setState({ password })
    }

    _login = async () => {
        try {
            const success = await login(this.state.username, this.state.password)
            this.props.navigation.navigate('Main')
        } catch (err) {
            const errMessage = err.message
            this.setState({ err: errMessage })
        }
        // console.log(this.state.username);
        // if (this.state.username == 'username' && this.state.password == 'password') {
        //     this.props.navigation.navigate("Main");
        // } else {
        //     this.setState({ errorMessage: 'username is [username] and password is [password]' })
        // }
        // const response = await fetch('http://192.168.0.12:8000/', {
        //     method: 'POST',
        //     mode: 'no-cors',
        //     headers: {
        //         'content-type': 'application/json',
        //         body: JSON.stringify({ username: this.state.username, password: this.state.password }),
        //     }
        // });

        // console.log(response);

        // if (response.ok) {
        //     this.props.navigation.navigate("Main");
        //     return;
        // }
        // const errorMessage = await response.text()
        // this.setState({ errorMessage })

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.error}>{this.state.errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="username"
                    value={this.state.username}
                    onChangeText={this.handleUsernameUpdate} />
                <TextInput
                    type="password"
                    style={styles.input}
                    placeholder="password"
                    value={this.state.password}
                    onChangeText={this.handlePasswordUpdate}
                />

                <Button title="Press to Log In" onPress={this._login} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1
    },
    input: {
        padding: 10,
        margin: 10
    },
    error: {
        color: 'red'
    },
    text: {
        textAlign: 'center'
    }
})