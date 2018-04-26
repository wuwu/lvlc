<template>
    <div class="menu menu--main">
        <ul class="menu-list">
            <li v-for="item of menu" key="item.index"><a>{{item.title}}</a></li>
        </ul>
    </div>
</template>

<script type="text/babel">
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'MenuMain',
    components: {},
    data: function () {
      return {}
    },
    methods: {
      ...mapActions({
        getMenu: 'loadMenu'
      })
    },
    computed: {
      ...mapGetters({
        menu: 'getMenu'
      })
    },
    mounted () {
      this.getMenu()
    }
  }
</script>

<style lang="scss" scoped>
 .menu--main {
     width: 100%;
     margin-top: 30px;
    .menu-list{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

            a{
            font-weight: 700;
            font-size: 24px;
            text-transform: uppercase;
            padding-top: 5px;
            padding-bottom: 5px;
        }
    }
 }
</style>
