//import Library
import React from 'react';
import { View , Text } from 'react-native';
import Header from './Header';
import Card from './Card';
import Login from './Login';
import Me from './Me';
import {createStackNavigator, createAppContainer} from 'react-navigation';

//write component
class App extends React.Component{
    render() {
        return (
            //component about react native
            <View>
                <Header title="Albums" />
                <Card />
            </View>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        Login: Login,
        Me: Me
    }, {
        // initialRouteName: "Login"
        initialRouteName: "Me"
    }

);

//export
export default createAppContainer(AppNavigator); 