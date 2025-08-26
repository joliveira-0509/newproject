import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.text}>Sai deste corpo que não te pertence</Text>
      <TextInput style={styles.campo} placeholder='Digite se confirma' placeholderTextColor="red"/>
      <Button title = 'Botão' onPress={()=>console.log("Teste")} color={'#005F5F'}/>
      <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={()=>console.log("Tester de botão")}>
        <Text style={styles.buttonText}>Botão teste</Text>
      </TouchableOpacity>
    </View>
    </> 
  );
}

const styles = StyleSheet.create({
  
  text: {
    color:'#fff',
    fontSize:20
  },

  container: {
    flex:1,
    backgroundColor: '#000',
    paddingLeft:25,
    marginTop:20
  },

  campo:{
    backgroundColor:" #005F5F",
    borderRadius:8,
    marginTop:25,
  },

  buttonText:{
    color:'#fff',
    fontSize:20,
  },

  button:{
    backgroundColor:'#1742EB',
  }

});
