import Logger from 'js-logger'


const log = Logger.get('apiClient');

export function jsonRequest(url, options = {}) {
  log.debug('will fetch', url, options);
  return fetch(url, options)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json().then((json) => {
        log.debug('fetch success', json);
        return json;
      });
    })
}

export function get(url) {
  return jsonRequest(url, { method: 'GET' })
}

export function post(url) {
  return jsonRequest(url, { method: 'POST' })
}

export function put(url) {
  return jsonRequest(url, { method: 'PUT' })
}

export function del(url) {
  return jsonRequest(url, { method: 'DELETE' })
}
