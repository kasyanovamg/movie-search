import { createStore, applyMiddleware, compose } from 'redux'
import { commonReducer } from '../reducers/index'
import thunk from 'redux-thunk';
import middlewareAddFvorite from '../middlewares/addFavorites'

const configureStore = (initialState) => {
    return createStore(
        commonReducer,
        initialState,
        compose(
            applyMiddleware(thunk, middlewareAddFvorite),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

    );
}

export default configureStore