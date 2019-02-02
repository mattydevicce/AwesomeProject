import React from 'react';
import { SectionList, StyleSheet, Text } from 'react-native';

/* 
    A react component that renders a section list
    Looking for props of an array of strings
    ex. ['Good Will Hunting', 'Firday After Next', 'Inception', 'Inglorious Basterds']

*/

export default class AppSectionList extends React.Component {
    constructor(props) {
        super(props);
        const styles = StyleSheet.create({
            sectionHeader: {
                paddingTop: 2,
                paddingLeft: 10,
                paddingRight: 10,
                paddingBottom: 2,
                fontSize: 14,
                fontWeight: 'bold',
                backgroundColor: 'rgba(247,247,247,1.0)',
            },
            item: {
                padding: 10,
                fontSize: 18,
                height: 44,
            }
        })
        
        this.state = {
            styles: styles
        }
    }
    
    render() {
        return (
            <SectionList
                sections={this.props.sections}
                renderItem={({item}) => <Text style={this.state.styles.item}>{item}</Text>}
                renderSectionHeader={({section}) => <Text style={this.state.styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
            />
        )
    }    
}