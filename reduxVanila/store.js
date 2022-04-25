
const redux = require("redux");
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger();
const applyMiddleWare = redux.applyMiddleware;
const combineReducers = redux.combineReducers;


const ADD_SUBSCRIBER = "ADD_SUBSCRIBER"
const ADD_VIEWCOUNT = "ADD_VIEWCOUNT"
const createStore = redux.createStore;
//action
const addSubscriber = () => {
    return {
        type: "ADD_SUBSCRIBER"
    }
}

const addViewCount = () => {
    return {
        type: ADD_VIEWCOUNT
    }
}

//reducer
const subScriberState = {
    subscribers: 365
}

const subScriberReducer = (state = subScriberState, action) => {
    switch (action.type) {
        case ADD_SUBSCRIBER:
            return {
                ...state,
                subscribers: state.subscribers + 1
            }
        default: return state
    }
}

const viewState = {
    viewCount: 100
}

const viewReducer = (state = viewState, action) => {
    switch (action.type) {
        case ADD_VIEWCOUNT:
            return {
                ...state,
                viewCount: state.viewCount + 1
            }
        default: return state
    }
}

const rootReducer = combineReducers({
    view: viewReducer,
    subscriber: subScriberReducer,
})


//store

const store = createStore(rootReducer, applyMiddleWare(logger));

store.dispatch(addSubscriber())
store.dispatch(addSubscriber())
store.dispatch(addSubscriber())
store.dispatch(addViewCount())
store.dispatch(addViewCount())
store.dispatch(addViewCount())


