import { styles } from "./styles";
import {Text, TextInput, TouchableOpacity, View } from 'react-native';

type Props = {
    name:string,  // não obrigatório o uso do name (name?:string)
    onClick?: ()=>void,
}

export function Event({name}:Props) {
    return (
        <View style={styles.contener}>
            <Text style={styles.textEvent}>{name}</Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.5}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}