import React from "react";
import { View, Text, Image} from "react-native";
import styles from "./styles";
import {ChatRoom} from "../../types"
import moment from "moment";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import {useNavigation} from "@react-navigation/native"
export type ChatListBoxProps= {
    chatRoom: ChatRoom
}

const ChatListBox= (props: ChatListBoxProps) => {

    const navigation = useNavigation();
    const {chatRoom} = props;
    const user = chatRoom.users[1];
    const onClick= () =>{
        navigation.navigate("ChatRoom", 
            {
                id: chatRoom.id,
                name: user.name,
                avatar: user.imageUri,
                
            }
        )
        console.log(user.imageUri)
    }

    return(
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.mainContainer}>

                    <Image 
                        source={{uri: user.imageUri}}
                        style={styles.avatar}
                    />

                    <View style={styles.subContainer}>
                        <Text 
                        style={styles.username}>
                            {user.name}
                        </Text>

                        <Text
                            numberOfLines={1}
                            ellipsizeMode="tail" 
                            style={styles.lastMessage}>
                                {chatRoom.lastMessage.content}
                        </Text>
                    </View>

                </View>
            
                <Text style={styles.timestamp}>
                    {moment(chatRoom.lastMessage.createdAt).format("MMM.DD.YY")}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default ChatListBox;