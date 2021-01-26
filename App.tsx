import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { concordiaTheme } from './src/@theme/styles/concordia-theme';

import Main from './src/pages/main';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Router>
      <div>
        <ApplicationProvider {...eva} theme={{ ...eva.light, ...concordiaTheme }}>
          <Main />
        </ApplicationProvider>
      </div>
    </Router>
  );
}
