import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from './src/components/Input/Input'
import { TextInput } from 'react-native-gesture-handler';

import Colors from 'Colors'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Input iconName="md-code" placeholder="Default"/>
        <Input iconName="md-code" placeholder="Disabled" disabled />
        <Input iconName="md-code" placeholder="Warning" state={'warning'}/>
        <Input iconName="md-code" placeholder="Error" state={'error'}/>
        <Input iconName="md-code" placeholder="Done" state={'done'}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
