// *** Action Types ***
export const NAVIGATE = 'NAVIGATE'
export const NAV_PUSH = 'NAV_PUSH'
export const NAV_POP = 'NAV_POP'
export const NAV_JUMP_TO_KEY = 'NAV_JUMP_TO_KEY'
export const NAV_JUMP_TO_INDEX = 'NAV_JUMP_TO_INDEX'
export const NAV_RESET = 'NAV_RESET'
export const SEARCH_STARTED = 'SEARCH_STARTED'
export const BASIC_ACTION = 'BASIC_ACTION'


// *** Action Creators ***
// The following action creators were derived from NavigationStackReducer
export function navigatePush(state) {

    state = typeof state === 'string' ? {
        key: state,
        title: state
    } : state
    return {
        type: NAV_PUSH,
        state
    }
}

export function navigatePop() {
    return {
        type: NAV_POP
    }
}

export function navigateJumpToKey(key) {
    return {
        type: NAV_JUMP_TO_KEY,
        key
    }
}

export function navigateJumpToIndex(index) {
    return {
        type: NAV_JUMP_TO_INDEX,
        index
    }
}

export function navigateReset(routes, index) {
    return {
        type: NAV_RESET,
        index,
        routes
    }
}
export function basicAction(data) {
    return (dispatch, getState) => {
        return {
            type: BASIC_ACTION,
            index,
            routes
        }
    }
}

export const postData = () => {
    return (dispatch) => {
        dispatch({
                type: SEARCH_STARTED
            })
            //alert(getState().navigationState.wishes)
        api.postData({
            "date": new Date(),
            "title": "foo",
            "body": "bar",
            "userId": 1,
        }).then((res) => {
            dispatch({
                type: BASIC_ACTION,
            })
        })
    }
}

const fetchSth = (dispatch) => {
    return dispatch => {
        var returnData;
        dispatch({
            type: SEARCH_STARTED
        })
        api.fetchSth().then((res) => {
        //Fetching someting from URL or from disk are the same
        //api.readFromDisk.then((res)=>{
            returnData = JSON.parse(res);
            if (returnData == null) {
                //console.log('Entered');
                //dispatch(somefunction());
            } else {
                dispatch({
                    type: BASIC_ACTION,
                    returnData
                })
            }
        });
    }
}
