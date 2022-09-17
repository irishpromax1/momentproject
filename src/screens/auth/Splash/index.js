import React from 'react';
import {Text,Image, View, Pressable} from 'react-native';
import Button from '../../../components/Button';
import {styles} from './styles';


const Splash = () => {
    return(
        <View style = {styles.container}>
            <Image resizeMode='contain' style = {styles.image} source = {require ('../../../assets/MomentAppIcon.png')}/>
               
                <View style = {styles.titleContainer}>

                    <Text style = {styles.title}>Moment</Text>
                    <Text style = {styles.subtitle}>Save every moment here</Text>

                </View>

           <Button title= "Sign Up"/>
           
           
           


           <Pressable hitSlop={20} style = {styles.login}>
                <Text style = {styles.footerText}>Log In</Text>
           </Pressable>
           

        </View>
    )
}

export default React.memo(Splash);

