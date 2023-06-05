import { View, Button, Alert, StyleSheet } from "react-native";

export default function Header(){

    onPressButton = (e) => {
        console.log("Working");
        console.log(e);
    }

    return(
        <View style={style.Header}>
            <Button onPress={this.onPressButton} style={style.Button} title="One" color="#FFF"/>
            <Button style={style.Button} title="two" color="#FFF"/>
            <Button style={style.Button} title="three" color="#FFF"/>
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