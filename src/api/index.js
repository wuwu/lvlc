import WPAPI from 'wpapi'

const apiRootJSON = require('./wp-json.json')
const wp = new WPAPI({
  endpoint: 'http://thelovelace.com//wp-json/',
  routes: apiRootJSON.routes,
  username: 'wuwu',
  password: 'aBRDMR9pukLhGD1dkBIUjy&#'
})

export default {
  getPosts () {
    return wp.posts().perPage(21).embed()
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
  }
}
