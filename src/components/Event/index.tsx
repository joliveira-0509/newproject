import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './styles';

export default function Event() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Evento do Aluno</Text>
            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}> + </Text>
            </TouchableOpacity>
        </View>
    )
}