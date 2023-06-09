import { View, ScrollView, StyleSheet, Text } from "react-native";
import Header from "../components/Header";
import Banner from "../components/Banner";

export default function Home({navigation}){
    return(
        <View style={styles.container}>
            <Header navigation={navigation}/>
            <Banner/>
            <ScrollView style={styles.scrollContainer}>
            <Text style={styles.text}>test</Text>
            <Text style={styles.text}>test</Text>
            <Text style={styles.text}>test</Text>
            <Text style={styles.text}>test</Text>
            <Text style={styles.text}>test</Text>
            <Text style={styles.text}>test</Text>
            <Text style={styles.text}>test</Text>
            <Text style={styles.text}>test</Text>
            <Text style={styles.text}>test</Text>
            <Text style={styles.text}>test</Text>
            <Text style={styles.text}>test</Text>
            <Text style={styles.text}>test</Text>
            <Text style={styles.text}>test</Text>
            <Text style={styles.text}>test</Text>
            <Text style={styles.text}>test</Text>
            <Text style={styles.text}>test</Text>
            <Text style={styles.text}>test</Text>
            <Text style={styles.text}>test</Text>
            <Text style={styles.text}>test</Text>
            <Text style={styles.text}>test</Text>
            <Text style={styles.text}>test</Text>
            <Text style={styles.text}>test</Text>
            <Text style={styles.text}>test</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightcoral',
    },
    scrollContainer:{
        flex:1,
        padding: 16,
        backgroundColor: "red"
    },
    text:{
        fontSize:32
    }
})