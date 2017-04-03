import Logger from 'js-logger'


const log = Logger.get('apiClient');

export function jsonRequest(url, options = {}, params) {
  const fullUri = params ? `${url}?${params}` : url;
  log.debug('will fetch', fullUri, options);
  return fetch(fullUri, options)
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

export function get(url, options, params) {
  return jsonRequest(url, { method: 'GET' }, params)
}

export function post(url, options, params) {
  return jsonRequest(url, { method: 'POST' }, params)
}

export function put(url, options, params) {
  return jsonRequest(url, { method: 'PUT' }, params)
}

export function del(url, options, params) {
  return jsonRequest(url, { method: 'DELETE' }, params)
}
