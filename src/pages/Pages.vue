<template>
    <div class="container">
        <h1>Pages</h1>
    </div>
</template>

<script type="text/babel">
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'xxxx',
    components: {},
    data: function () {
      return {}
    },
    computed: {
      ...mapState({
        posts: state => state.posts,
        pages: state => state.pages,
        isLoadingPosts: state => state.loading
      })
    },
    methods: {
      ...mapActions({
        loadPosts: 'loadPosts',
        loadPages: 'loadPages'
      })
    },
    mounted () {
      if (!this.pages.length) {
        console.log('loading pages')
        this.loadPages()
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
