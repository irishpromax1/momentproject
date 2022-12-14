import React, {useState} from 'react';
import {Text, View} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import { Checkbox } from '../../../components/Checkbox';
import GoogleLogin from '../../../components/GoogleLogin';
import  Input from '../../../components/Input'; 
import { Seperator } from '../../../components/Seperator';
import {styles} from './styles';


const SignUp = () => {

    const [checked, setChecked] = useState(false);

    const onSignIn = () => {
        console.log("Hello")
    }

    return(
        

        <View style = {styles.container}>
            <AuthHeader title = "Sign Up"/>
            <Input label = "Name" placeholder="John Appleseed"/>
            <Input label = "E-mail" placeholder="johnappleseed@gmail.com"/>
            <Input isPassword label = "Password" placeholder="*******"/>

            <View style = {styles.agreement}>
                <Checkbox checked={checked} onCheck={setChecked}/>
                <Text style = {styles.agreementText}>I agree with the Terms & Conditions</Text>
            </View>

            <Button style={styles.button} title='Sign Up'/>



            <Text style={styles.footer}>Already have an account? 
                <Text onPress={onSignIn} style={styles.link}> Sign In</Text>
            </Text>
        </View>

    )
}

export default React.memo(SignUp);

