import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/bootstrap.css';
import App from './components/app';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
