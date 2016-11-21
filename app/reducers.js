import { combineReducers } from 'redux'
import * as NavigationStateUtils from 'NavigationStateUtils'


import * as action from './actions'

const initialNavState = {
	index: 0,
	loading:false,
	routes: [
		{ key: 'SplashScreen'+Date.now(), title: '' }
	]
  }

function navigationState(state = initialNavState, action) {
	//console.log(state);
	switch (action.type) {
	case action.NAV_PUSH:
		if (state.routes[state.index].key === (action.state && action.state.key)) return state
		return NavigationStateUtils.push(state, action.state)

	case action.NAV_POP:
		//alert(JSON.stringify(state));
		if (state.index === 0 || state.routes.length === 1) return state
		return NavigationStateUtils.pop(state)

	case action.NAV_JUMP_TO_KEY:

		return NavigationStateUtils.jumpTo(state, action.key)

	case action.NAV_JUMP_TO_INDEX:
		return NavigationStateUtils.jumpToIndex(state, action.index)

	case action.NAV_RESET:
		return {
			...state,
			index: action.index,
			routes: action.routes
		}

	default:
		return state
	}
}


const appReducers = combineReducers({
	navigationState
})

export default appReducers
