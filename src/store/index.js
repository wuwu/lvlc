import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

import es6Promise from 'es6-promise'

es6Promise.polyfill()
Vue.use(Vuex)

const IS_LOADING = 'IS_LOADING'
const SHOW_MODAL = 'SHOW_MODAL'
const POSTS_LOADED = 'POSTS_LOADED'
const MENU_LOADED = 'MENU_LOADED'
const PAGES_LOADED = 'PAGES_LOADED'
const SINGLE_POST_LOADED = 'SINGLE_POST_LOADED'
const SHOW_SINGLE_POST = 'SHOW_SINGLE_POST'

const store = new Vuex.Store({
  state: {
    count: 0,
    auth: false,
    loading: false,
    showModal: false,
    postOnDisplay: '',
    test: 'wuwu',
    posts: [],
    pages: [],
    menu: []
  },
  mutations: {
    [IS_LOADING] (state, payload) {
      state.loading = payload
    },
    [SHOW_MODAL] (state, payload) {
      state.showModal = payload
    },
    [POSTS_LOADED] (state, payload) {
      state.posts = payload
    },
    [MENU_LOADED] (state, payload) {
      state.menu = payload
    },
    [PAGES_LOADED] (state, payload) {
      state.pages = payload
    },
    [SINGLE_POST_LOADED] (state, payload) {
      state.posts = payload
    },
    [SHOW_SINGLE_POST] (state, payload) {
      state.postOnDisplay = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    showModal ({commit, state}, payload) {
      console.log('actions show modal', payload)
      commit(SHOW_MODAL, payload)
    },
    loadPosts ({state, commit}) {
      commit('setLoading', true)
      return api.getPosts().then((response) => {
        commit(POSTS_LOADED, response)
        commit('setLoading', false)
      }).catch((error) => {
        console.log(error)
        commit('setLoading', false)
      })
    },
    loadPages ({state, commit}) {
      commit('setLoading', true)
      return api.getPages()
        .then((response) => {
          commit(PAGES_LOADED, response)
          commit('setLoading', false)
        }).catch((error) => {
          console.log(error)
          commit('setLoading', false)
        })
    },
    loadMenu ({state, commit}) {
      commit('setLoading', true)
      return api.getMenu()
        .then((response) => {
          commit(MENU_LOADED, response)
          commit('setLoading', false)
        }).catch((error) => {
          console.log(error)
          commit('setLoading', false)
        })
    },
    loadSinglePost ({state, commit}, id) {
      commit('setLoading', true)
      console.log('action load singlepost', id)
      return api.getPostBySlug().then((response) => {
        // console.log('Response', response[0])
        var newPostId = response[0].id
        // console.log('newItem', newPostId)
        var allPosts = state.posts
        if (state.posts.length) {
          const hasDuplicate = allPosts
            .map(function (e) { return e.id === newPostId })
            .reduce(function (pre, cur) { return pre || cur })
          if (!hasDuplicate) {
            console.log('We need to push', response)
            commit('setLoading', false)
            commit(SINGLE_POST_LOADED, response)
          } else {
            commit('setLoading', false)
            console.log('Duplicate Item')
          }
        } else {
          commit('setLoading', false)
          commit(SINGLE_POST_LOADED, response)
        }
      }).catch((error) => {
        console.log(error)
        commit('setLoading', false)
      })
    },
    navigateToPost ({commit, state}, postId) {
      commit(SHOW_SINGLE_POST, postId)
    }
  },
  getters: {
    getPosts: (state) => {
      return state.posts
    },
    getMenu: (state) => {
      return state.menu
    },
    getPostById: (state, getters) => (id) => {
      return state.posts.find(post => post.id === id)
    },
    getPostIdBySlug: (state, getters) => (slug) => {
      let post = state.posts.find(post => post.slug === slug)
      let id = (typeof post === 'undefined') ? null : post.id
      return id
    },
    getNextPost: (state) => {
      const index = state.posts.findIndex(p => p.id === state.postOnDisplay)
      // console.log('getNextPost', state.postOnDisplay, index, state.posts.length)
      if (index >= 0 && index < state.posts.length - 1) {
        const nextPost = state.posts[index + 1]
        console.log('nextPost', nextPost)
        const data = {'id': nextPost.id, 'slug': nextPost.slug, 'name': nextPost.title.rendered}
        console.log('data', data)
        return data
      }
    },
    get__match: state => (id) => {
      const postObj = state.posts.find(post => post.id === id)
      const post = {
        title: postObj.title.rendered,
        date: postObj.date,
        content: postObj.content.rendered,
        featuredImage: postObj.better_featured_image.source_url
      }
      return post
    }
  }
})
export default store
