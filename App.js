import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// https://edigleyssonsilva.medium.com/cloud-functions-for-firebase-sending-e-mail-1f2631d1022e

export default function App() {
	const sendLoveToMartin = () => {
		alert('Love sent to Martin');
	};

	const sendLoveToLena = () => {
		alert('Love sent to Lena');
	};

	return (
		<View style={styles.container}>
			<View style={styles.halfScreen} backgroundColor={black}>
				<TouchableOpacity style={styles.buttonWhite} onPress={sendLoveToMartin}>
					<Text>DARUJ LÁSKU MARTINOV</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.halfScreen} backgroundColor={white}>
				<TouchableOpacity style={styles.buttonBlack} onPress={sendLoveToLena}>
					<Text style={{ color: white }}>DARUJ LÁSKU LÉNĚ</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

let white = '#fff',
	black = '#000';

const styles = StyleSheet.create({
	container: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	halfScreen: {
		alignItems: 'center',
		justifyContent: 'center',
		height: '50%',
		backgroundColor: black,
	},
	buttonWhite: {
		backgroundColor: white,
		paddingVertical: 20,
		width: '80%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonBlack: {
		backgroundColor: black,
		paddingVertical: 20,
		width: '80%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
