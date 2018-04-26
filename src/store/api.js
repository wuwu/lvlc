import WPAPI from 'wpapi'

const apiRootJSON = require('./wp-json.json')
var namespace = 'wp/v2'; // use the WP API namespace
var route = '/rooms/(?P<id>)'; // route string - allows optional ID parameter

const wp = new WPAPI({
  endpoint: 'http://lvlc.wp:3000/wp-json',
  routes: apiRootJSON.routes,
  username: 'admin',
  password: 'letmein'
})
wp.rooms = wp.registerRoute(namespace, route);

export default {
  getPosts () {
    return wp.rooms().perPage(21).embed()
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  },
  getPostBySlug (slug) {
    return wp.posts().slug(slug).perPage(1).embed()
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  }
}
