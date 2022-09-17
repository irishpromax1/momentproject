import {StyleSheet} from "react-native";
import { colors } from "../../utils/colors";


export const styles = StyleSheet.create ({
    container:{
        flexDirection:'row',
        alignItems: 'center',
        marginVertical: 20,
    },

    line:{
        height:1.5,
        backgroundColor: colors.orange,
        flex:2,

    },

    text:{
        color:colors.blue,
        fontWeight: '500',
        marginHorizontal: 20,
        fontSize:15,
    }

    
})