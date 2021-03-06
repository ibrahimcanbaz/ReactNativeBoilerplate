import React, {PropTypes,Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import styles  from '../styles/styles';
import NavButton  from './NavButton';

class FirstScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {data: this.props.data};
  }

  componentWillMount(){

    //this.props.fetchUlkeList();
  }



render() {
	return (
    <View  style={styles.mainBackgroundImage} >
		<View style={styles.container}>
			<Text style={styles.title}>First Screen</Text>
			<NavButton destLabel="Sec" buttonHandler={this.props.onButtonPress} />
		</View>
  </View>
	)
}
}

FirstScreen.propTypes = {
	onButtonPress: PropTypes.func.isRequired
}



export default FirstScreen
