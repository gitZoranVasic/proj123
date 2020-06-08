<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        </div>
        <div class="mx-auto order-0">
            <a class="navbar-brand mx-auto" href="#">Web programming project</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ml-auto" v-if="authUser" >
                    <li class="nav-item">
                        <a class="nav-link" href="#">{{ authUser.username }}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">{{ authUser.role }}</a>
                    </li>
                    <li class="nav-item flight-count">
                        <img src="../assets/airplane.png" alt="" class="flight-icon">
                        <a class="nav-link" href="#"><i class="fa fa-calendar-o"></i>    {{ reservationNumber }}</a>
                    </li>
            </ul>
            <button v-if="authUser" type="button" class="btn btn-light" @click="logout">Logout</button>
        </div>
    </nav>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

export default {

mounted() {

},

computed: {
  ...mapGetters([
  'authUser',
  'reservationNumber'
  ]),

  isNav() {
    return this.$router.currentRoute.name !== 'Login'
  }
},

methods: {
    ...mapActions(['logoutUser', 'loginUser']),

    logout() {
      this.logoutUser()
      this.$router.push('/login')
    }
}

}
</script>

<style lang="sass" scoped>

  .flight-icon
    margin-left: 5px
    max-width: 24px
    max-height: 24px
  
  .flight-count
    display: flex;
    justify-content: center;
    align-items: center;

  button
    margin: 1rem
    
</style>