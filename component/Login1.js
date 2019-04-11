//import library
import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

// write component
export default class Login extends React.Component{
    static navigationOptions = {
        
        title: "Login",
        headerStyle: {
            backgroundColor: "#1E90FF",
        },
        headerTintColor: "white",
        
    };
    
    constructor(){
        super()
        this.state ={
            email: '',
            password: ''
        };
    }

    async componentDidMount() {
        try {
            if (await AsyncStorage.getItem("login_token") !== null) {
                this.props.navigation.navigate("Me");
            }
        } catch (error) {
            console.error(error);
        }
    }

    goLogin() {
        axios.post("http://128.199.240.120:9999/api/auth/login", {
            email: this.state.email,
            password: this.state.password
        }).then(async function (response) {
            // alert("Logined !");

            console.log(response.data.data.token);
            try {
                await AsyncStorage.setItem("login_token", response.data.data.token);
            } catch (error) {
                alert("Save token error !");

                return;
            }

            this.props.navigation.navigate("Me");
        }.bind(this))
        .catch(function (error) {
            alert("Login fail !");
            console.log(error);
        });
    }
    render(){
        return(
            <View >
                    <TextInput
                        style={{ alignItems: 'center' , height:40, fontSize: 20 }}
                        placeholder="Email"
                        value={this.state.email}
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                    <TextInput
                        secureTextEntry
                        style={{ height:40, fontSize: 20 }}
                        placeholder="Password"
                        value={this.state.password}
                        onChangeText={(text) => this.setState({ password: text })}
                    />
                    <Button title="Login" color = "#1E90FF" onPress={this.goLogin.bind(this)} />
            </View>
        );
    }
}