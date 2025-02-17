import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  TouchableOpacity
} from 'react-native';
import Resultado from './src/components/modal';

export default function App() {
  const [alcool, setAlcool] = useState('')
  const [gasolina, setGasolina] = useState('')
  const [visible, setVisible] = useState(false)
  const [resultado, setResultado] = useState('')

  function calcular() {
    const valorGasolina = parseFloat(gasolina);
    const valorAlcool = parseFloat(alcool);

    const resultado = valorAlcool / valorGasolina;

    if (resultado > 0.7) {
      setResultado("Melhor abastecer com Gasolina");
    } else {
      setResultado("Melhor abastecer com Álcool");
    }
    
    setAlcool(alcool)
    setGasolina(gasolina)
    setVisible(true)
  }

  return (
    <View style={styles.sectionContainer}>

      <Image style={styles.image} source={require('./src/assets/logo.png')} />

      <Text style={styles.titulo}>Qual a melhor opção ?</Text>


      <Text style={styles.tituloInput}>Álcool (preço por litro):</Text>
      <TextInput style={styles.input}
        value={alcool}
        placeholder=" Digite o valor do alcool"
        onChangeText={(texto) => setAlcool(texto)}
        keyboardType="numeric"
      />

      <Text style={styles.tituloInput}>Gasolina (preço por litro):</Text>
      <TextInput style={styles.input}
        value={gasolina}
        placeholder=" Digite o valor da gasolina"
        onChangeText={(texto) => setGasolina(texto)}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableOpacity>

      <Modal animationType='slide' visible={visible}>
        <Resultado voltar={() => setVisible(false)} alcool={alcool} gasolina={gasolina} resultado={resultado}/>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#000',
    flex: 1,
    padding: 20
  },
  image: {
    alignSelf: 'center',
    marginTop: 80
  },
  titulo: {
    color: '#fff',
    fontSize: 25,
    marginVertical: 30,
    alignSelf: 'center'
  },
  tituloInput: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: 20
  },
  button:{
    backgroundColor: 'red'
  },
  textButton:{
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    padding: 10,
    alignSelf: 'center'
  }
});