<template>
  <div class="login">
    <div class="login-wrap">
      <h1>Login</h1>
      <b-nav-form @submit.stop.prevent="login" class="login-form">
          <b-form-input
            v-model="username"
            aria-label="Input"
            placeholder="Username"
            class="mr-1" />
          <b-form-input 
            v-model="password"
            aria-label="Input"
            placeholder="Password"
            class="mr-1" />
        <button type="submit" class="btn btn-primary">Login</button>
      </b-nav-form>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Login',

  mounted() {
  },

  data() {
    return {
      username: '',
      password: ''
    }
  },

  computed: {
  ...mapGetters([
  'authUser'
  ]),
},

  methods: {
    ...mapActions(['loginUser']),

    login() {
      this.loginUser({
       username: this.username,
       password: this.password
      }).then(() => {
        this.$router.push('/')
      })

    }
  }

}
</script>

<style lang="sass" scoped>

.login
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: center;
  
  h1
    font-size: 5rem
    margin-bottom: 3rem

.login-form
  max-width: 50%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column

  .form-inline
    align-items: flex-end
    flex-direction: column

  .mr-1
    margin-top: 1rem

  button
    margin-top: 2rem
    
  
  &::marker
    display: none

</style>