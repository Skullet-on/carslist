import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/bootstrap.css';
import App from './components/app';

import { Provider } from 'react-redux';
import store from './store';


ReactDOM.render(<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));

store.subscribe(() => console.log('New state', store.getState()));