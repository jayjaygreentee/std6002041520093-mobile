import React, { Component } from 'react' ;
import { View, Text } from 'react-native' ;
import axios from 'axios';
import { Config } from '@jest/types';


//write component
class About extends Component {
    constructor(){
        super();
        this.state ={
            name: '',
            email: ''
        }
    }
    componentDidMount() {
        const urt = 'http://128.199.240.120:9999/api/auth/me' ;
        const config = {
            headers: {
                accept: '*/*',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1Y2FlZTc2MTBhYTc3ZjQwYzQyZjA0ZGUiLCJpYXQiOjE1NTQ5NjY0NDN9.m7J9MB8HZj5PNBCeqwlDYCdtLNqaSTuvsf7-DSbIPeY'
            }
        }
        axios.get(urt, Config)
            .then(Response =>{
                console.log(Response);
            })
            .catch(error => {
                console.log('error', error);
            })
    }
    render() {
        return (
            <View>
                    <Text> Name: {this.state.name}</Text>
                    <Text> Email: {this.state.email}</Text>
            </View>
        );
    }
}

//export
export default About;
