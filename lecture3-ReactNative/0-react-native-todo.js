import React from 'react';
import { View, Button, Text, ScrollView, StyleSheet, Switch } from 'react-native';

import { Constants } from 'expo'

const styles = StyleSheet.create({
    todoContainer: { flexDirextion: 'row', alignItems: 'center' },
    appContainer: {
        paddingTop: Constants.statusBarHeight
    },
    title: { fontSize: 50, textAlign: 'center' },
    fill: {
        flex: 1
    }
})

const Todo = props => {
    return (
        <View style={styles.todoContainer}>
            <Switch value={props.todo.checked} onValueChange={props.onToggle} />
            <Button onPress={props.onDelete} title="delete" />
            <Text>{props.todo.text}</Text>
        </View>
    );
};
let id = 0;

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
        };
    }
    addTodo = () => {
        id++;
        const text = `TODO Number: ${id}`;
        this.setState({
            todos: [...this.state.todos, { id: id, text: text, checked: false }],
        });
    };
    removeTodo = id => {
        this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
    };

    toggleTodo = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id !== id) return todo;
                return {
                    id: todo.id,
                    text: todo.text,
                    checked: !todo.checked,
                };
            }),
        });
    };

    render() {
        return (
            <View style={[styles.appContainer, styles.fill]} className="App">
                <Text style={styles.title}>TODOS</Text>

                <Text>TODO Count: {this.state.todos.length}</Text>
                <Text>
                    Unchecked todo count:{' '}
                    {this.state.todos.filter(todo => todo.checked).length}
                </Text>
                <Button onPress={this.addTodo} title="Add TODO" />
                <ScrollView style={styles.fill}>
                    {this.state.todos.map(todo => (
                        <Todo
                            onToggle={() => this.toggleTodo(todo.id)}
                            onDelete={() => this.removeTodo(todo.id)}
                            todo={todo}
                        />
                    ))}
                </ScrollView>
            </View>
        );
    }
}

export default App;
