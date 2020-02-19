import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 25,
  },
  button: {
    backgroundColor: '#333333',
  },
});

export default ({ onPress, text }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);