import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Cotizacion = ({ resultado }) => {
	if (Object.keys(resultado).length === 0) return null;

	return (
		<View style={styles.resultado}>
			<Text style={[styles.texto, styles.precio]}>
				<Text style={styles.span}>{resultado.PRICE} </Text>
			</Text>
			<Text style={styles.texto}>
				24 hour high: <Text style={styles.span}> {resultado.HIGHDAY} </Text>
			</Text>
			<Text style={styles.texto}>
				24 hour Low: <Text style={styles.span}> {resultado.LOWDAY} </Text>
			</Text>
			<Text style={styles.texto}>
				24 hour change percentage:{' '}
				<Text style={styles.span}> {resultado.CHANGEPCT24HOUR} % </Text>
			</Text>
			<Text style={styles.texto}>
				Last update: <Text style={styles.span}> {resultado.LASTUPDATE} </Text>
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	resultado: {
		backgroundColor: '#3127c9',
		padding: 20,
		flex: 1,
	},
	texto: {
		color: '#FFF',
		fontFamily: 'Lato-Regular',
		fontSize: 18,
		marginBottom: 10,
	},
	precio: {
		fontSize: 38,
	},
	span: {
		fontFamily: 'Lato-Black',
	},
});

export default Cotizacion;
