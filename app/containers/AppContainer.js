'use strict'

import React, {PropTypes} from 'react'
import {NavigationExperimental, View, StyleSheet ,Text , TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'

import First from './First'
import Second from './Second'
import Modal from './Modal'

import { navigatePop ,navigatePush , menuAction,basicAction } from '../actions'
import Icon  from 'react-native-vector-icons/Ionicons';
import stylesCss  from '../styles/styles';


const {
	Transitioner: NavigationTransitioner,
	Card: NavigationCard,
	Header: NavigationHeader
} = NavigationExperimental


class AppContainer extends React.Component {
	render() {
		let { navigationState, backAction , menuAction } = this.props

		return (

			// Redux is handling the reduction of our state for us. We grab the navigationState
			// we have in our Redux store and pass it directly to the <NavigationTransitioner />.
			<NavigationTransitioner
				navigationState={navigationState}
				style={stylesCss.container}
				render={props => (
					// This mimics the same type of work done in a NavigationCardStack component
					<View style={stylesCss.container}>
						<NavigationCard
							// NavigationTransitioner's render method passes `navigationState` as a
							// prop to here, so we expand it plus other props out in <NavigationCard>.
							{...props}
							// Transition animations are determined by the StyleInterpolators. Here we manually
							// override the default horizontal style interpolator that gets applied inside of
							// NavigationCard for a vertical direction animation if we are showing a modal.
							// (Passing undefined causes the default interpolator to be used in NavigationCard.)
							style={props.scene.route.key === 'Modal' ?
										NavigationCard.CardStackStyleInterpolator.forVertical(props) :
										undefined
							}
							onNavigateBack={backAction}
							// By default a user can swipe back to pop from the stack. Disable this for modals.
							// Just like for style interpolators, returning undefined lets NavigationCard override it.
							panHandlers={props.scene.route.key === 'Modal' ? null : undefined }
							renderScene={this._renderScene}
							key={props.scene.route.key}
						/>
					<NavigationHeader style={stylesCss.navigationHeader}
							{...props}

							renderTitleComponent={props => {
								const title = props.scene.route.title
								return <View style={stylesCss.titleContainer}>
												<Text style={stylesCss.title} >{title}</Text>
											 </View>
							}}
							renderLeftComponent={props => {
								if(props.scene.route.key.includes('ShowVakitler')){
									return;
								}
								return <TouchableOpacity style={{width:30,height:NavigationHeader.HEIGHT}} onPress={backAction} >
									<Icon style={{color:'white',paddingLeft:5,paddingTop:10}} size={30} name="ios-arrow-back-outline"></Icon>
								</TouchableOpacity>
							}}
							renderRightComponent={props => {
								if (!props.scene.route.key.includes('Modal')) {

									return <TouchableOpacity style={{width:30,height:NavigationHeader.HEIGHT}} onPress={menuAction} >
										<Icon style={{color:'white',paddingLeft:5,paddingTop:10}} size={30} name="md-more"></Icon>
									</TouchableOpacity>
								}

							}}
							// When dealing with modals you may also want to override renderLeftComponent...
						/>

					</View>
				)}
			/>
		)
	}

	_renderScene({scene}) {
		const { route } = scene

		if (route.key.includes("First")){
			return <First />
		} else if (route.key.includes("Second")) {
			return <Second />
		} else if (route.key.includes("Modal")) {
			return <Modal />
		}

	}
}

AppContainer.propTypes = {
	navigationState: PropTypes.object,
	backAction: PropTypes.func.isRequired,
	menuAction: PropTypes.func.isRequired
}



export default connect(
	state => ({
		navigationState: state.navigationState
	}),
	dispatch => ({
		backAction: () => {
			dispatch(navigatePop())
		},
		menuAction: () => {
			dispatch(menuAction())
		}

	})

)(AppContainer)
