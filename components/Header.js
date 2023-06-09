import { View, Button, Alert, StyleSheet } from "react-native";

export default function Header({navigation}){

    return(
        <View style={style.Header}>
            <Button onPress={() => navigation.navigate("Home")} style={style.Button} title="One" color="#FFF"/>
            <Button onPress={() => navigation.navigate("Two")} style={style.Button} title="two" color="#FFF"/>
            <Button onPress={() => navigation.navigate("Three")} style={style.Button} title="three" color="#FFF"/>
        </View>
    )
}

const style = StyleSheet.create({
    Header:{
        backgroundColor: "red",
        padding: 10,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 2,
        borderColor: "green"
    },
    Button:{
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        backgroundColor: "yellow"
    }
})