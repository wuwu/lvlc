<template>
    <div class="container is-full">
        <div v-if="posts && posts.length" class="posts columns is-multiline">
            <div class="column is-6" v-for="post of posts"
                 key="post.index">
                <div class="card post"
                     @click.prevent="navigateToPost({id: post.id, slug: post.slug})">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img :src="post.better_featured_image.media_details.sizes.widget.source_url" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <h3 class="title is-size-3" v-html="post.title.rendered"></h3>
                        <p v-html="post.excerpt.rendered"></p>
                        <a @click.prevent="navigateToPost({id: post.id, slug: post.slug})">read Post</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
  import { mapActions, mapGetters } from 'vuex'
  // import { connectToJwt } from 'wordpress-jwt-auth'

  export default {
    name: 'TestRest',
    components: {},
    data: function () {
      return {}
    },
    computed: {
      ...mapGetters({
        posts: 'getPosts'
      })
    },
    // Fetches posts when the component is created.
    mounted () {
      if (!this.posts.length) {
        console.log('loading posts')
        this.loadPosts()
      }
    },
    methods: {
      ...mapActions({
        loadPosts: 'loadPosts',
        loadPost: 'navigateToPost'
      }),
      navigateToPost (e) {
        console.log(e.id, e.slug)
        this.loadPost(e.id)
        this.$router.push({name: 'room', params: { slug: e.slug, id: e.id }})
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
