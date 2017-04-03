import Model from '../../base/Model';

export default class Post extends Model {
  static modelName = 'Post';
  static url = 'http://jsonplaceholder.typicode.com/posts';

  toString() {
    return this.title || '???';
  }
}
