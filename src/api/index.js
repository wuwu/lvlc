import WPAPI from 'wpapi'
const apiRootJSON = require('./wp-json.json')

var roomNamespace = 'wp/v2' // use the WP API namespace
var roomRoute = '/rooms/(?P<id>)' // route string - allows optional ID parameter
var menuNamespace = 'wp-api-menus/v2/menus'
var menuRoute = '/2'
// wpapi = an instance of `node-wpapi`

const wp = new WPAPI({
  endpoint: 'http://lvlc.wp/wp-json/',
  routes: apiRootJSON.routes
})
wp.setHeaders('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1dWlkIjoiMmQzNmQ1YjQtNzI5NC00OWZjLWI5ZmEtMmRjNmViOTcyNzdjIiwiaXNzIjoiaHR0cDpcL1wvbHZsYy53cCIsImlhdCI6MTUxMTcxMjQ2MCwibmJmIjoxNTExNzEyNDYwLCJleHAiOjE1MTIzMTcyNjAsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.jOa5Ud763QXeYa_auIvQuZK-83GA4-m9u3ARPYgJCBc')
wp.rooms = wp.registerRoute(roomNamespace, roomRoute)
wp.menu = wp.registerRoute(menuNamespace, menuRoute)

export default {
  getPosts () {
    return wp.rooms().perPage(21).embed()
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  },
  async getPages () {
    try {
      const pages = await wp.pages().perPage(21).embed()
      return pages
    } catch (e) {
      console.error(e)
      return e
    }
  },
  getPostBySlug (slug) {
    return wp.posts().slug(slug).perPage(1).embed()
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  },
  getMenu () {
    return wp.menu()
      .then((response) => Promise.resolve(response.items))
      .catch((error) => Promise.reject(error))
  }
}
