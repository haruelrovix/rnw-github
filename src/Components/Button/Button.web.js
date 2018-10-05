import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './Button.style';

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <Text style={styles.text}>{props.title}</Text>
      {props.children}
    </TouchableOpacity>
  );
};

export default Button;
