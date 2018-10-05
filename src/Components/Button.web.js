import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <Text style={styles.text}>{props.title}</Text>
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'rgb(32, 137, 220)',
    borderRadius: 3,
    flexDirection: 'row',
    height: 37,
    justifyContent: 'center',
    width: 200
  },
  text: {
    color: 'white',
    fontSize: 16,
    padding: 8
  }
});

export default Button;
