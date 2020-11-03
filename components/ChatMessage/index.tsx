import moment from "moment";
import React from "react";
import {View, Text} from "react-native";
import { Message } from "../../types";
import styles from './styles'

export type ChatMessageProps={
    message: Message
}
const ChatMessage=(props: ChatMessageProps)=> {
    const {message} = props;
    const myMessage= () =>{
        return message.user.id=== "u1"
    }
    return(
        <View style={styles.container}>

            <View style={[
                styles.subContainer,
                {
                    backgroundColor: myMessage() ? "black" : "#3c3535",
                    marginLeft: myMessage()? 50 : 0,
                    marginRight: myMessage()? 0:50

                }
                ]}>

                {!myMessage() && <Text style={styles.user}>{message.user.name}</Text>}
                <Text style={styles.message}>{message.content}</Text>
                <Text style={styles.timestamp}>{moment(message.createdAt).fromNow()}</Text>

            </View>
            
        </View>
    )
}
export default ChatMessage;