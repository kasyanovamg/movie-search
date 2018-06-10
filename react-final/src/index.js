import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import configureStore  from './store/store'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { loadState, saveState } from './localStorage'

const persistedState = loadState();

const store = configureStore(persistedState);

store.subscribe(() => {
    saveState({
        favorites: {favoriteIDs: store.getState().favorites.favoriteIDs}
    });
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
