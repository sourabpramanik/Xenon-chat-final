import {StyleSheet} from "react-native";


const styles = StyleSheet.create(
    {
        container:{
            flexDirection: "row",
            width: "100%",
            justifyContent: "center"
        },
        subContainer:{
            borderColor: "#b30404",
            borderWidth: 0.5,
            borderRadius: 15,
            padding: 10,
            margin: 10,
            flex: 1,
            flexDirection: "row"
        },
        button:{
            backgroundColor: "#b30404",
            alignSelf: "center",
            width:40,
            height: 40,
            justifyContent: "center",
            borderRadius: 35,
            alignItems: "center"
        },
        input:{
            color: "white",
            flex: 1,
            marginLeft: 6
            
        }
    }
)
export default styles;