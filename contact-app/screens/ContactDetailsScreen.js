import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';
export default class ContactDetailsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: `${navigation.getParam('name')}`,
            headerRight: <Button onPress={() => navigation.navigate('ContactDetails', { name: 'test', phone: 'test' })} title="RandomContact" />
        }
    }
    getRandomContact = () => {

        const contacts = this.props.screenProps.contacts;
        return contacts[0];
    }
    handleJump = () => {
        this.props.navigation.navigate('ContactDetails', this.getRandomContact);
    }
    render() {
        return (
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
        paddingTop: Constants.statusBarHeight,
        alignItems: 'center',
    },
    padding: {
        paddingTop: 100,
    }
})
