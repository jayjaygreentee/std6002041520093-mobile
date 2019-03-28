import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import CardSection from './CardSection';

class Card extends Component {
    render() {
        return (
            <View style={{alignItems: 'center',backgroundColor: '#FFFFE0'}}>
                <CardSection>
                <Image 
                    style={{width:150, height:150}}
                    source={{uri:'https://images.unsplash.com/photo-1546717137-f348ef0e0e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80' }} />
                    <Text>พรุ่งนี้ค่อย</Text>
                    <Text>Pop</Text>
                </CardSection>

                <CardSection>
                <Image 
                    style={{width:150, height:150}}
                    source={{uri:'https://images.unsplash.com/photo-1546396360-b87fb5c5dd0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1319&q=80' }} />
                    <Text>ยังไม่ได้นอน</Text>
                    <Text>Pop</Text>
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
        backgroundColor: '#CD853F', 
        justifyContent: 'center'

    },
    Button: {
        width:300, 
        height:10, 
        backgroundColor: '#FFD700'
    }

}
export default Card;