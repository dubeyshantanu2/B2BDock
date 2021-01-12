import React, { Component } from 'react';
import { StatusBar,StyleSheet, Text, View, Image, Dimensions, TextInput } from 'react-native';

const{ width, height } = Dimensions.get('window')

// const Login =() => {
//     const [email , onChangeText] = React.useState('Email');    
// }

export default class Login extends Component {
render() {
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            
            <View style={styles.header}>
                <Text style={{ fontWeight: 'bold', fontSize: 36, fontStyle: 'normal', lineHeight: 36 }} >Welcome to B2B Dock</Text>
            </View>
            
            <View style={styles.title}>
                <Text style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: 16, lineHeight: 24 }}>Signin to access your Dock</Text>
            </View>    
            
            <View style={styles.login}>
                <Text style={{ fontWeight: 'bold', fontSize: 24, fontStyle: 'normal', lineHeight: 36}}>Login</Text>
            </View>
            
            <View style={styles.register}>
                <Text style={{ fontWeight: 'bold', fontSize: 24, fontStyle: 'normal', lineHeight: 36, color: '#9C9C9C'}}>Register</Text>
            </View>

            <View style={styles.email}>
                <Text style={{ fontStyle: 'normal', fontWeight: 500, fontSize: 16, lineHeight: 24 }}>E-mail</Text>
            </View>

            {/* <View style={styles.emailText}>
            <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 340 }}
            // onChangeText={text => onChangeText(text)}
            // value={value}
            />
            </View> */}
        </View>


    );
}
}

const styles = StyleSheet.create({
    constainer: {
        position: 'relative',
        width: width,
        height: height,
    },
    header: {
        position: 'absolute',
        //width: width*0.64,
        //height: height*0.401785,
        left: 16,
        top: 99,
    },
    title: {
        position: 'absolute',
        // width: width*0.5169,
        // height: height*0.0267,
        left: 16,
        top: 143,
    },
    login:{
        position: 'absolute',
        left: 16,
        top: 244,   
    },
    register: {
        position: 'absolute',
        left: 131,
        top: 244
    },
    email: {
        position: 'absolute',
        left: 16,
        top: 334,
    },
    emailText: {
        position: 'absolute',
        left: 16,
        top: 406,
    }
})
