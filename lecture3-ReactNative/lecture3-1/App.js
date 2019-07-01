import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Count, { num } from './Count'


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter</Text>
      <Text>NUM: {num}</Text>
      <Count count={0} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50
  }
});
