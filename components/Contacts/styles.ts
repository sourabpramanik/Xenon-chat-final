import {StyleSheet} from "react-native";


const styles=StyleSheet.create({
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
    container:{
        borderBottomWidth: 0.22,
        borderBottomColor: "#272525",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        width: "100%",
        margin: 5
    },
    subContainer: {
        
    }

})
export default styles;