import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

const Header = () => <Text style={styles.encabezado}>Crypto Today</Text>;

const styles = StyleSheet.create({
	encabezado: {
		paddingTop: Platform.OS === 'ios' ? 50 : 10,
		fontFamily: 'Lato-Black',
		backgroundColor: '#3127c9',
		paddingBottom: 10,
		textAlign: 'center',
		textTransform: 'uppercase',
		fontSize: 20,
		color: '#FFF',
		marginBottom: 20,
	},
});

export default Header;
