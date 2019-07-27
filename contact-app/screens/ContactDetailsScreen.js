import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';
export default class ContactDetailsScreen extends React.Component {
    state = {
        showText: true
    }
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: `${navigation.getParam('name')}`,
        }
    }
    getRandomContact = () => {

        const contacts = this.props.screenProps.contacts;
        const contact = contacts[Math.floor(Math.random() * contacts.length)];;
        return contact;
    }
    handleJump = () => {
        this.setState({ showText: false })
        this.props.navigation.push('ContactDetails', this.getRandomContact());
    }
    render() {
        return (

            this.state.showText &&
            <View style={styles.container}>
                <Text>
                    Detail Screen
                    </Text>
                <Text>
                    {this.props.navigation.getParam('name')}
                </Text>
                <Text>
                    {this.props.navigation.getParam('phone')}
                </Text>
                <Button title="Jump to random contact" onPress={this.handleJump} />
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    padding: {
        paddingTop: 100,
    }
})
