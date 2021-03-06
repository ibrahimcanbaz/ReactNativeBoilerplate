import React, {PropTypes} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import NavButton from './NavButton'
import styles  from '../styles/styles';

const SecondScreen = (props) => {
	return (
		<View  style={styles.mainBackgroundImage} >
		<View style={styles.container}>
			<Text style={styles.title}>Second Screen</Text>

			<NavButton destLabel="Third" buttonHandler={props.onButtonPress} />


			<View style={styles.spacer}>
				<NavButton destLabel="Modal" buttonHandler={props.onModalButtonPress} />
			</View>
		</View>
	</View>
	)
}

SecondScreen.propTypes = {
	onButtonPress: PropTypes.func.isRequired,
	onModalButtonPress: PropTypes.func.isRequired,
}



export default SecondScreen
