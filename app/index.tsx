import { Link } from "expo-router";
import { Text, View } from "react-native";

const IndexScreen = () => (
    <View>
        <Link href='/players'><Text>Fo to players screen</Text></Link>
        <Link href='/teams'><Text>Fo to teams screen</Text></Link>
    </View>
);