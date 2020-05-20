import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './modules/utils/store';

import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import './index.css';
import * as serviceWorker from './serviceWorker';

//TODO: Add jwt token logic

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <ApplicationProvider {...eva} theme={eva.light}>

                </ApplicationProvider>
            </div>
        </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
