//import Library
import React from 'react';
import { View , Text } from 'react-native';
import Header from './Header';
import Card from './Card';

//write component
class App extends React.Component{
    render() {
        return (
            //component about react native
            <View>
                <Header title="Albums" />
                <Text> RapepanNakpan</Text>
                <Text> 6002041520093</Text>
                <Card />
            </View>
        );
    }
}

//export
export default App;