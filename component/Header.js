//import library
import React, { Component } from 'react';
import { View, Text } from 'react-native';

//create component
class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                 <Text style={styles.text}>{this.props.title}</Text>
            </View>
        )
    }
}

//style
const styles = {
    header:{
        padding: 50,
        alignItems: 'center',
        backgroundcolor: '#FFF5EE'

    },
    text: {
        fontSize: 50,
        color: '#FF3366'
    }

}

//export
export default Header;
