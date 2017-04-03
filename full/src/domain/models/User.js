import Model from '../../base/Model';
import Post from './Post';

export default class User extends Model {
  static modelName = 'User';
  static url = 'http://jsonplaceholder.typicode.com/users';

  getPosts = () => Post.models;

  toString() {
    return this.name || '???';
  }
}
