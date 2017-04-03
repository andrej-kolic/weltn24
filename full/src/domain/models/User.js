import Model from '../../base/Model';

export default class User extends Model {
  static modelName = 'User';
  static url = 'http://jsonplaceholder.typicode.com/users';

  toString() {
    return this.name || '???';
  }
}
