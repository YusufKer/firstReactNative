import { View, Text } from 'react-native';
import Header from "../components/Header";

export default function({navigation}){
    return(
        <View>
            <Header navigation={navigation}/>
            <Text>Testing Screen 3</Text>
        </View>
    )
}