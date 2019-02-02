import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Button } from 'react-native';
import AppSectionList from './components/AppSectionList';

export default class SortedSectionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: 'asdf',
      sections: []
    };
  }


  componentDidMount() {
    const defaultSections = [
        {title: 'G', data: ['Good Will Hunting']},
        {title: 'F', data: ['Firday After Next']},
        {title: 'I', data: ['Inception', 'Inglorious Basterds']}
    ];
    this.setState({
        sections: defaultSections
    })
}

  
  onPressLearnMore = () => {
    // Update the section and clear the input

    // Set variables for more readable code
    let sections = this.state.sections;
    let inputText = this.state.inputText;
    

    // Find or add a section
    if (sections.find(x => {return x.title === inputText[0].toUpperCase()})) {
      // get index of section and append input to the data list
      sections[sections.map(x => x.title).indexOf(inputText[0].toUpperCase())].data.push(inputText);
    } else {
      sections.push({title: inputText[0].toUpperCase(), data: [inputText]});
      sections.sort((x, y) => x.title[0] > y.title[0] ? 1 : -1)
    };

    // clear input
    this.setState({
      inputText: '',
      sections: sections
    });
    console.log(this.state)
  }

  render() {
    return (
      <View style={{padding: 10, paddingTop: 50}}>
        <Text>Input something into the list for it to be automatically sorted into its place</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(inputText) => this.setState({inputText})}
          value={this.state.inputText}
        />
        <Button
          onPress={this.onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <AppSectionList sections={this.state.sections} />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => SortedSectionList);
