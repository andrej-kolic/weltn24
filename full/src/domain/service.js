import User from './models/User';
import { getStore } from '../base/store';
import Logger from 'js-logger'

const log = Logger.get('service');


export async function fetchUsers(){
  await User.fetch();
  log.debug(`${User.count()} users fetched`);
}

export async function selectedUser(userId){
  log.debug('login', userId);
  getStore().selectedUser = User.getById(userId);
  log.debug('selected user:', getStore().user);
}
