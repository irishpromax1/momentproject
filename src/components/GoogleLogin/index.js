import React from "react";
import {  Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const GoogleLogin = ({onPress}) => {
    
    
    return(
        <TouchableOpacity  onPress={onPress} style = {styles.container}>
            <Image style = {styles.image} source = {require("/Users/imanirishdaniel/Desktop/AwesomeProject/src/assets/googleL.png")}/>
        </TouchableOpacity>

    )
}

export default React.memo(GoogleLogin);