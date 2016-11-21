import { combineReducers } from 'redux'
import * as NavigationStateUtils from 'NavigationStateUtils'


import * as types from './actions'

const initialNavState = {
	index: 0,
	loading:false,
	routes: [
		{ key: 'FirstScreen'+Date.now(), title: '' }
	]
  }

function navigationState(state = initialNavState, action) {
	//console.log(state);

	switch (action.type) {

	case types.NAV_PUSH:

		if (state.routes[state.index].key === (action.state && action.state.key)) return state

		return NavigationStateUtils.push(state, action.state)

	case types.NAV_POP:

		if (state.index === 0 || state.routes.length === 1) return state
		return NavigationStateUtils.pop(state)

	case types.NAV_JUMP_TO_KEY:

		return NavigationStateUtils.jumpTo(state, action.key)

	case types.NAV_JUMP_TO_INDEX:
		return NavigationStateUtils.jumpToIndex(state, action.index)

	case types.NAV_RESET:
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
