import React, {PropTypes} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import NavButton from './NavButton'
import styles  from '../styles/styles';

const ModalScreen = (props) => {
	return (
    <View  style={styles.mainBackgroundImage} >
		<View style={styles.container}>
			<Text style={styles.title}>Second Screen</Text>

			<NavButton destLabel="Third" buttonHandler={props.onButtonPress} />



		</View>
  </View>
	)
}

ModalScreen.propTypes = {
	onButtonPress: PropTypes.func.isRequired,
}



export default ModalScreen
