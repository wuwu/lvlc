<template>
    <div class="container is-full">
        <img :src="room.featuredImage"/>
        <h1>{{room.title}}</h1>
        <div class="content" v-html="room.content"></div>
    </div>
</template>

<script type="text/babel">
  export default {
    name: 'Room',
    components: {},
    data: function () {
      return {
        roomId: this.$route.params.id,
        slug: this.$route.params.slug
      }
    },
    computed: {
      room () {
        return this.$store.getters.get__match(this.roomId)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
