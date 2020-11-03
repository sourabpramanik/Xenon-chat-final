import { StyleSheet } from "react-native";


const styles= StyleSheet.create(
    {
        container:{
            padding: 10,
        },
        subContainer:{
            borderColor: "#b30404",
            borderWidth: 0.22,
            borderRadius: 5,
            padding: 5,
        },
        message:{
            color: "white",
            fontSize: 13,
            padding: 4

        },
        timestamp:{
            color: "grey",
            alignSelf: "flex-end"
        },
        user: {
            color: "#b30404",
            fontSize: 15

        }
    }
)
export default styles;

