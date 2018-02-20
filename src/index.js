import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

import './normalize.css';
import './skeleton.css';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
