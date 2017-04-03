import React from 'react';
import ReactDOM from 'react-dom';
import App from './ui/App';
import './index.css';

import * as service from './domain/service';
import Logger from 'js-logger';

Logger.useDefaults({ defaultLevel: Logger.DEBUG });

const log = Logger.get('index');
log.info('start');

async function start() {
  await service.fetchUsers();

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

start();
