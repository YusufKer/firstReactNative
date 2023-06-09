import { View, Text} from 'react-native';
import Header from '../components/Header';

export default function Two({navigation}){
    return(
        <View>
            <Header navigation={navigation}/>
            <Text>Component Two</Text>
        </View>
    )
}