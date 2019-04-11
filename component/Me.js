import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

export default class Me extends React.Component {
    static navigationOptions = {
        title: "Profile",
        headerStyle: {
            backgroundColor: "#8B5927",
        },
        headerTintColor: "white",
    };

    constructor() {
        super();

        this.state = {
            loading: true,
            name: "Loading...",
            email: "Loading...",
        };
    }

    async componentDidMount() {
        this.props.navigation.addListener("didFocus", async function() {
            this.setState({ loading: true });
            let token = "";

            try {
                const value = await AsyncStorage.getItem("login_token");
                if (value !== null) {
                    token = value;
                } else {
                   
                    this.setState({ loading: false });

                    this.props.navigation.navigate("Login");

                    return;
                }
            } catch (error) {
                console.error(error);

                this.setState({ loading: false });
                return;
            }

            axios.get("http://128.199.240.120:9999/api/auth/me", {
                headers: {
                    "Authorization": "Bearer " + token
                }
            }).then(function (response) {
                // alert("Get OK !");

                console.log(response);

                this.setState({ 
                    email: response.data.data.email, 
                    name: response.data.data.name 
                });

                this.setState({ loading: false });
            }.bind(this)).catch(function (error) {
                console.log(error);

                alert("Get fail !");
                this.setState({ loading: false });
            });
        }.bind(this));
    }

    async logout() {
        try {
            await AsyncStorage.removeItem("login_token");
        } catch (error) {
            console.error(error);
        }

        this.props.navigation.navigate("Login");
    }

    render() {
        return (
            !this.state.loading ? 
            <View style={{ padding: 20 }}>
                <Text style={{ textAlign: "center", fontSize: 28, color: "#E19B50", marginBottom: 20 }}>Your profile</Text>

                <Text style={{ marginBottom: 10, fontSize: 16  }}>Name: {this.state.name}</Text>
                <Text style={{ marginBottom: 10, fontSize: 16 }}>Email: {this.state.email}</Text>

                <Button title="Logout" color = "#8B5927"onPress={this.logout.bind(this)} />
            </View> : 
            <View style={{ padding: 20 }}>
                <Text style={{ textAlign: "center", fontSize: 18 }}>Loading...</Text>
            </View>
        );
    }
}