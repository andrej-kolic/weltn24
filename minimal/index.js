require('es6-promise').polyfill();
require('isomorphic-fetch');

function jsonRequest(url) {
  return fetch(url)
    .then(function (response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
}

var userId = 1;
var user = null;
var posts = null;

Promise.all([
  // fetch data for given userId
  jsonRequest('http://jsonplaceholder.typicode.com/users/' + userId)
    .then(function (json) {
      console.log('user fetched');
      user = json;
    }),
  jsonRequest('http://jsonplaceholder.typicode.com/posts?userId=' + userId)
    .then(function (json) {
      console.log('posts fetched');
      posts = json;
    })
]).then(function () {
  // connect models and sort posts in descending order
  console.info('data loaded');
  user.posts = posts.sort(function (a, b) {
    return a.id < b.id ? 1 : -1
  });
  posts.forEach(function (element) {
    element.user = user;
  });
  // print data
  console.log('latest post for user ' + user.name + ' is titled ' + user.posts[0].title)
}).catch(function (err) {
  // log exception
  console.error(err);
});

