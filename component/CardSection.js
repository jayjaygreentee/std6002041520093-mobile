import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class CardSection extends Component {
    render() {
        return (
            <View>
                <Image 
                    style={{width:50, height:50}}
                    source={{uri:'https://images.unsplash.com/photo-1546717137-f348ef0e0e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80' }} />
                <Text>123456</Text>
            </View>

        );
    }
}

export default CardSection;