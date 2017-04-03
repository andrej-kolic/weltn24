import * as apiClient from './apiClient';
import { getStore } from './store';
import Logger from 'js-logger'


const log = Logger.get('Model');

export default class Model {

  static get models() {
    return getStore().orm[this.modelName];
  }

  static set models(json) {
    return getStore().orm[this.modelName] = json;
  }

  static async fetch() {
    const res = await apiClient.get(this.url);
    this.models = res.map((json) => {
      const model = new this();
      Object.assign(model, json);
      return model;
    });
  }

  static count() {
    return this.models.length;
  }

  static getById(id) {
    return this.models.find(model => model.id === +id);
  }
}
