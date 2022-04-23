import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, View, Image, TouchableOpacity, Button} from 'react-native';
import React from 'react';
import Clock from "./components/clock.js";





export default class App extends React.Component {
   
  state = {
    value: 0,
    total_count: 0,
    switchValue: false
  };

  incrementValue = () => {
    if (this.state.switchValue == false) {
      this.setState({
        value: this.state.value + 1,
        total_count: this.state.total_count + 1
      })
    }
    else {
      this.setState({
        value: this.state.value + 2,
        total_count: this.state.total_count + 1
      })
    }
  }

  decrementValue = () => {
    if (this.state.switchValue == false) {
      this.setState({
        value: this.state.value - 1,
        total_count: this.state.total_count + 1
      })
    }
    else {
      this.setState({
        value: this.state.value - 2,
        total_count: this.state.total_count + 1
      })
    }
  }

  toggleSwitch = sValue => {
    this.setState({
      switchValue: sValue,
      value: 0,
      total_count: 0

    })
  }
  

  render() {

  return (
    
    <View style={styles.container}>
      
      <Clock />

      <Text style={{ fontSize: 60, marginBottom: -20}}>{this.state.value}</Text>
      <Text style={{ fontSize: 12, padding: 20, color: 'grey'}}>{"total count:" + this.state.total_count}</Text>
      <StatusBar style="auto" />
      <View style={{flexDirection: 'row'}}>

        <Button onPress={this.incrementValue} title='Increase'/>
        <Text>   </Text>
        <Button onPress={this.decrementValue} title="Decrease"/>

      </View>
      <View>
        <Text>Incrememnt by Two</Text>
      </View>
      <View>
        <Switch  value={this.state.switchValue} onValueChange={this.toggleSwitch}/>

      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }});