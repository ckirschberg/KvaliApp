import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { signup } from '../store/actions/UserActions';
import defaultStyles from './../GeneralStyles'

import Input from './../components/Input';

const SignupScreen = () => {
    const [changeName, setChangeName] = useState(''); // lift up
    const [nameValid, setNameValid] = useState(false); // lift up - pass through props instead
    
    //const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    const dispatch = useDispatch();

    const handleSignup = () => {
        dispatch(signup(changeName, password));
    }

    return (
    <View style={styles.container}>

        <Input label="E-mail"
            error="Please fill out your username"
            text={changeName} nameValid={nameValid}
            onValid={ (valid: any) => setNameValid(valid)}
            setContent={ (content: any) => setChangeName(content)}/>

        {/* <TextInput style={defaultStyles.textInput} onChangeText={onChangeEmail} value={email} /> */}
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