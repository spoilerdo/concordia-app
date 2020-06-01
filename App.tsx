import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

import Main from './src/pages/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Router>
      <div>
        <ApplicationProvider {...eva} theme={eva.light}>
          <Main />
        </ApplicationProvider>
      </div>
    </Router>
  );
}
