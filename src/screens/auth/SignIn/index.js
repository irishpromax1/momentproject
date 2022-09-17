import React, {useState} from 'react';
import {Text, View} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import { Checkbox } from '../../../components/Checkbox';
import GoogleLogin from '../../../components/GoogleLogin';
import  Input from '../../../components/Input'; 
import { Seperator } from '../../../components/Seperator';
import {styles} from './styles';


const SignIn = () => {

    const [checked, setChecked] = useState(false);

    const onSignUp = () => {
        console.log("Hello")
    }

    return(
        

        <View style = {styles.container}>
            <AuthHeader title = "Sign In"/>
            <Input label = "E-mail" placeholder="johnappleseed@gmail.com"/>
            <Input isPassword label = "Password" placeholder="*******"/>

            <Button style={styles.button} title='Sign In'/>



            <Text style={styles.footer}>Don't have an account? 
                <Text onPress={onSignUp} style={styles.link}> Sign Up</Text>
            </Text>
        </View>

    )
}

export default React.memo(SignIn);

