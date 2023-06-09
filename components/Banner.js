import { 
    View,
    Image, 
    StyleSheet, 
    Dimensions
 } from "react-native";

export default function Banner (){
    return(
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri:'https://reactnative.dev/docs/assets/p_cat2.png'}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"lightblue"
    },
    image:{
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").width/2,
        resizeMode: 'contain'
    }
})