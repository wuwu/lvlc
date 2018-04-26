<template>
  <div class="hello container is-fluid">
    <h1 class="title is-2 has-text-weight-light">{{ msg }}</h1>
      <p class="is-size-3 has-text-weight-semibold">Together with Alexander Strub and his Team at RBS Group we have turned the former executive offices into 30 spacious suites & rooms combining the convenience of high class offices with the smart look of modern design furniture and a cosy “soft shell” with a 360° curtain. The rooms offer total privacy, great comfort and a lot of content to be discovered.</p>
      <test-rest></test-rest>
  </div>
</template>

<script>
import TestRest from '@/components/TestRest.vue'

export default {
  name: 'hello',
  components: {
    TestRest
  },
  data () {
    return {
      msg: 'Rooms & Suites'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .hello{
        padding-right: 10px;
    }
h1, h2 {
  margin-top: 30px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
