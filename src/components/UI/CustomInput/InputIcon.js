import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Ionicons as Icon } from '@expo/vector-icons'

const InputIcon = props => (
  <View style={styles.iconContainer}>
    <Icon name={props.name} style={{ color: props.color, fontSize: 18 }} />
  </View>
);

const styles = StyleSheet.create({	
  iconContainer: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InputIcon;