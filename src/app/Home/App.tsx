import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { Event } from '../../components/Event';
import { Button, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.titulo_container}>
                <Text style={styles.text_titul}>My New project</Text>
                <Text style={styles.text_legend}>Mó preguisa de mecher nisso</Text>
            </View>
            <View style={styles.contener_person}>
                <View style={styles.contener_input}>
                    <TextInput style={styles.input} placeholder='Digite algo' placeholderTextColor={"grey"} />
                    <TouchableOpacity style={styles.button} activeOpacity={0.5}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <Event name='Evento-novo'/>
                    <Event name="newEvent"/>
                </View>
            </View>
            <Button title="Salvar" onPress={() => console.log("Deu certo")} />
            <StatusBar style="auto" />
        </View>
    );
}