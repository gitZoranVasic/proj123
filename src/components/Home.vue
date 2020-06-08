<template>
  <div class="home">
    <div 
      class="ticket"
      :key="index"
      v-for="(ticket, index) in tickets"
      >
      <div class="column flight-data">
        <p>Company: {{ ticket.company.name }}</p>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import {mapGetters, mapActions} from 'vuex'
import { getTickets } from '../api/tickets'

export default {
  name: 'Home',

  data() {
    return {
      tickets: []
    }
  },

  mounted() {
    getTickets().then((result) => {
      this.tickets = {
        company: result.response.company.name
      }
      
    })
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

  .ticket
    border: 1px solid red
</style>