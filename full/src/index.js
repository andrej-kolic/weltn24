import React from 'react';
import ReactDOM from 'react-dom';
import App from './ui/App';
import './index.css';
import Logger from 'js-logger';

Logger.useDefaults({ defaultLevel: Logger.DEBUG });

const log = Logger.get('index');
log.info('start');

function start() {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

start();
