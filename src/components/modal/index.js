import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function Resultado(props) {
    return (
        <View style={styles.sectionContainer}>

            <Image style={styles.image} source={require('../../assets/gas.png')} />

            {props.resultado !== "" && <Text style={styles.titulo}>{props.resultado}</Text>}

            <View>
                <Text style={styles.tituloResultado}>Com os preços:</Text>
                <Text style={styles.resultado}>Álcool: R$ {props.alcool}</Text>
                <Text style={styles.resultado}>Gasolina: R$ {props.gasolina}</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={props.voltar}>
                <Text style={styles.textButton}>Calcular novamente</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        backgroundColor: '#000',
        padding: 20
    },
    image: {
        alignSelf: 'center',
        marginTop: 100
    },
    titulo: {
        color: 'green',
        fontSize: 25,
        fontWeight: '600',
        marginVertical: 30,
        alignSelf: 'center'
    },
    tituloResultado: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 10
    },
    resultado: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 10
    },
    button: {
        backgroundColor: 'red',
        marginTop: 30
    },
    textButton: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        padding: 10,
        alignSelf: 'center'
    }
});