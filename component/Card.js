import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import CardSection from './CardSection';

class Card extends Component {
    render() {
        return (
            <View >
                <CardSection>
                    <View style={{flexDirection: 'row',margin: 10}}>
                        <Image 
                            style={{width:70, height:70}}
                            source={{uri:'https://images.unsplash.com/photo-1546717137-f348ef0e0e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80' }} />
                        <View style={{marginTop:10, marginLeft:10}}>
                            <Text>พรุ่งนี้ค่อย</Text>
                            <Text>Pop</Text>
                        </View>
                    </View>
                
                    
                </CardSection>

                <CardSection>
                <Image 
                    style={{margin:10, height:300}}
                    source={{uri:'https://images.unsplash.com/photo-1546396360-b87fb5c5dd0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1319&q=80' }} />
                </CardSection>


                <CardSection>
                    <View style={styles.CardSection}>
                        <View style={styles.Button}>
                    
                            <Button 

                             title="Buy"
                            />
                    
                        </View>
                    </View>       
                </CardSection>
                
            </View>

        );
    }
}
const styles = {
    CardSection:{
        justifyContent: 'center',
        alignItems: 'center'

    },
    Button: {
        width:300, 
        height:10, 
        backgroundColor: '#FFD700'
    }

}
export default Card;