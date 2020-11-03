import React from "react";
import {View, Text, Image} from "react-native";
import styles from "./styles"
import {Contact} from "../../types"

export type ContactProps={
    contact: Contact;
} 
const ContactBox = (props: ContactProps) => {
    const {contact}= props;
    return(
        <View style={styles.container}>
                <View style={styles.mainContainer}>

                    <Image 
                        source={{uri: contact.imageUri}}
                        style={styles.avatar}
                    />

                    <View style={styles.subContainer}>
                        <Text 
                        style={styles.username}>
                            {contact.name}
                        </Text>

                    </View>

                </View>
            </View>
    )
}
export default ContactBox; 

