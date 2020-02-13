import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Button, Alert } from 'react-native';

export default class CreateGroup extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    _onPressButton() {
        const {text} = this.state;
        Alert.alert(text + 'has been created!', '');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Create new group</Text>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Enter group name!"
                    onChangeText={text => this.setState({ text })}
                />
                <View style={styles.buttonContainer}>
                    <Button onPress={this._onPressButton} title="Press Me" />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20,
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});