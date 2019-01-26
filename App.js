import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Button } from 'react-native';

export default class SortedSectionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      listOfInput: []
    };
  }

  render() {
    let onPressLearnMore = () => {
      this.setState(state => { 
        state.listOfInput.push(<Text>{state.inputText}</Text>)
        state.inputText = ''
      });
    }

    return (
      <View style={{padding: 10, paddingTop: 50}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(inputText) => this.setState({inputText})}
        />
        <Button
          onPress={onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        {this.inputTextlistOfInput}
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => SortedSectionList);
