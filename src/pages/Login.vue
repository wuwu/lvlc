<template>
    <div clas="container">
        <form class="login" @submit.prevent="login">
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input v-model="username" class="input" type="text" placeholder="e.g Alex Smith">
                </div>
            </div>

            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input v-model="password" class="input" type="password" placeholder="">
                </div>
            </div>
            <div class="control">
                <button type=submit class="button is-info">Login</button>
                <button @click.prevent="validateToken" class="button is-info">Check Token</button>
                <button @click.prevent="deletePost" class="button is-info">delete</button>
                <button @click.prevent="updatePost" class="button is-info">update</button>
            </div>
            <span>localStorage Token:</span><p>{{token}}</p>
            <span>new Token</span><p>{{tokenNew}}</p>
                <span>new Token = localStorage Token</span><p>{{match}}</p>
        </form>

    </div>
</template>

<script type="text/babel">
  import axios from 'axios'

  export default {
    name: 'Login',
    components: {},
    data: function () {
      return {
        username: 'admin',
        password: 'letmein',
        token: localStorage.getItem('lvlc_api_token'),
        tokenNew: ''
      }
    },
    computed: {
      tokenls () {
        return localStorage.getItem('authUser')
      },
      match () {
        return this.token === this.tokenNew
      }
    },
    methods: {
      login () {
        let apiHost = process.env.API_URL
        console.log('apiHost', apiHost, this.username, this.password)
        axios.post(apiHost + '/wp-json/simple-jwt-authentication/v1/token', {
          username: this.username,
          password: this.password
        })
          .then(response => {
            console.log(response)
            this.tokenNew = response.data.token
            localStorage.setItem('lvlc_api_token', this.tokenNew)
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      validateToken () {
        const apiHost = `${process.env.API_URL}/wp-json`
        const token = localStorage.getItem('lvlc_api_token')
        var request = new Request(apiHost + '/simple-jwt-authentication/v1/token/validate', {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`
          })
        })

        fetch(request).then(response => {
          response.json().then(results => {
            if (results.data.status !== 200) {
              console.log(results)
            } else {
              console.log(true)
            }
          })
        }).catch(function (err) {
          console.log(err)
        })
      },
      updatePost () {
        // const authHeader = { headers: { Authorization: `bearer ${this.tokenNew}` } }
        axios({
          method: 'POST',
          data: { title: 'Marlon', content: 'Bernardes' },
          url: `${process.env.API_URL}/wp-json/wp/v2/posts/85`,
          headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${this.token}`
          }
        }).then(response => {
          console.log(response)
        }).catch(error => {
          console.log(error)
        })
      },
      deletePost () {
        // const authHeader = { headers: { Authorization: `bearer ${this.tokenNew}` } }
        axios({
          method: 'DELETE',
          url: `${process.env.API_URL}/wp-json/wp/v2/posts/85`,
          headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${this.token}`
          }
        }).then(response => {
          console.log(response)
        }).catch(error => {
          console.log(error)
        })
      }

    }
  }
</script>

<style lang="scss" scoped>

</style>
