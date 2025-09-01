import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './styles';

export default function Evento() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Evento do Aluno</Text>
            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}> + </Text>
            </TouchableOpacity>
        </View>
    )
}