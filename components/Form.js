import React, { useState, useEffect } from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableHighlight,
	Alert,
} from 'react-native';
import { Picker } from '@react-native-community/picker';
import axios from 'axios';

const Formulario = ({
	moneda,
	criptomoneda,
	guardarMoneda,
	guardarCriptomoneda,
	guardarConsultarAPI,
}) => {
	const [criptomonedas, guardarCriptomonedas] = useState([]);

	useEffect(() => {
		const consultarAPI = async () => {
			const url =
				'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
			const resultado = await axios.get(url);
			guardarCriptomonedas(resultado.data.Data);
		};
		consultarAPI();
	}, []);

	// Almacena las selecciones del usuario
	const obtenerMoneda = (moneda) => {
		guardarMoneda(moneda);
	};
	const obtenerCriptomoneda = (cripto) => {
		guardarCriptomoneda(cripto);
	};

	const cotizarPrecio = () => {
		if (moneda.trim() === '' || criptomoneda.trim() === '') {
			mostrarAlerta();
			return;
		}

		// Cambiar el state de consultar api
		guardarConsultarAPI(true);
	};

	const mostrarAlerta = () => {
		Alert.alert('Error...', 'Ambos campos son obligatorios', [{ text: 'OK' }]);
	};

	return (
		<View>
			<Text style={styles.label}>Currency</Text>
			<Picker
				selectedValue={moneda}
				onValueChange={(moneda) => obtenerMoneda(moneda)}
				itemStyle={{ height: 120 }}>
				<Picker.Item label='- Select currency -' value='' />
				<Picker.Item label='US Dollar' value='USD' />
				<Picker.Item label='Euro' value='EUR' />
				<Picker.Item label='Pound Sterling' value='GBP' />
			</Picker>

			<Text style={styles.label}>Criptocurrency</Text>
			<Picker
				selectedValue={criptomoneda}
				onValueChange={(cripto) => obtenerCriptomoneda(cripto)}
				itemStyle={{ height: 120 }}>
				<Picker.Item label='- Select cryptocurrency -' value='' />
				{criptomonedas.map((cripto) => (
					<Picker.Item
						key={cripto.CoinInfo.Id}
						label={cripto.CoinInfo.FullName}
						value={cripto.CoinInfo.Name}
					/>
				))}
			</Picker>

			<TouchableHighlight
				style={styles.btnCotizar}
				onPress={() => cotizarPrecio()}>
				<Text style={styles.textoCotizar}>Get value</Text>
			</TouchableHighlight>
		</View>
	);
};

const styles = StyleSheet.create({
	label: {
		fontFamily: 'Lato-Black',
		textTransform: 'uppercase',
		fontSize: 22,
		marginVertical: 20,
	},
	btnCotizar: {
		backgroundColor: '#3127c9',
		padding: 10,
		marginTop: 20,
	},
	textoCotizar: {
		color: '#FFF',
		fontSize: 18,
		fontFamily: 'Lato-Black',
		textTransform: 'uppercase',
		textAlign: 'center',
	},
});

export default Formulario;
