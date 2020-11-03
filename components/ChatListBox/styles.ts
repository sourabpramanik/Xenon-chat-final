import { StyleSheet } from "react-native";

const style = StyleSheet.create(
    {
        avatar: {
            width: 50,
            height: 50,
            borderRadius: 10,

            marginRight: 13
        },
        username: {
            color: "#b30404",
            fontSize: 17,
            fontWeight: "bold",
            marginBottom: 5,
        },
        mainContainer:{
            flexDirection: "row",
        },
        lastMessage: {
            color: "white",
            width: 170
        },
        container:{
            borderBottomWidth: 0.22,
            borderBottomColor: "#272525",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
            width: "100%",
            margin: 5
        },
        timestamp: {
            color: "grey",
            fontSize: 12,

        }
    }
)

export default style;