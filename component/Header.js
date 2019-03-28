//import library
import React, { Component } from 'react';
import { View, Text } from 'react-native';

//create component
class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                 <Text>{this.props.title}</Text>
            </View>
        )
    }
}

//style
const styles = {
    header:{
        padding: 5
    }
}

//export
export default Header;
