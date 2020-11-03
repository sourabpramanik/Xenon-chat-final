import React, { useState } from "react";
import {View, Text, TouchableOpacity} from "react-native";
import styles from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";
const Input = () =>{


    const [message, setMessage] = useState("")

    const onAttachmentPress=()=>{
        console.warn("Add hit")
    }
    const onSendPress=() => {
        console.warn("send hit")
    }
    const onClick= () => {
        if (!message){
            onAttachmentPress();
        }
        else{
            onSendPress()
            
        }
    }


    return(
        <View style={styles.container}>
            <View style={styles.subContainer}>
                
                <TextInput 
                style={styles.input}
                multiline
                value={message}
                onChangeText={setMessage}
                autoCapitalize={"words"}
                placeholderTextColor={"grey"}
                placeholder={"Let's talk"}
                />
            </View>
            <TouchableOpacity onPress={onClick} style={styles.button}>
                <View >
                    {!message?
                    <Ionicons name="ios-add-circle" size={30
                    } color="black" />
                    :
                    <Ionicons name="ios-send" size={36} color="black" />}
                </View>
            </TouchableOpacity>
            
        </View>
    )
}
export default Input;