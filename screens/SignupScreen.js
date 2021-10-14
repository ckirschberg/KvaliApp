import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { signup } from '../store/actions/UserActions';

const SignupScreen = props => {
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    const dispatch = useDispatch();

    const handleSignup = () => {
        dispatch(signup(email, password));
    }

    return (
    <View style={styles.container}>
        <TextInput style={defaultStyles.textInput} onChangeText={onChangeEmail} value={email} />
        <TextInput style={defaultStyles.textInput} onChangeText={onChangePassword} value={password} />

        <Button title="Signup" onPress={handleSignup} />
    </View>
 );
}

const styles = StyleSheet.create({
    container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
    },
    
 });
 

export default SignupScreen;