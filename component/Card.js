import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import CardSection from './CardSection';

class Card extends Component {
    render() {
        return (
            <View>
                <CardSection>
                <Image 
                    style={{width:300, height:300}}
                    source={{uri:'https://images.unsplash.com/photo-1546717137-f348ef0e0e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80' }} />

                </CardSection>
                
                <CardSection />
                <CardSection />
                <CardSection />
            </View>

        );
    }
}
export default Card;