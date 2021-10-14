import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../store/actions/UserActions';

const LoginScreen = props => {
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(login(email, password));
    }

    return (
    <View style={styles.container}>
        <TextInput style={defaultStyles.textInput} onChangeText={onChangeEmail} value={email} />
        <TextInput style={defaultStyles.textInput} onChangeText={onChangePassword} value={password} />

        <Button title="Login" onPress={handleLogin} />
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
 

export default LoginScreen;