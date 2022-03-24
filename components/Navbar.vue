<template>
  

<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand>TODO-APP</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <!-- <b-nav-item to="/task">Task</b-nav-item> -->
  <b-nav-item v-if="authenticatedUser" to="/" right>Home</b-nav-item>
  <b-nav-item v-if="authenticatedUser" to="/createtask" right>Creat Task</b-nav-item>
      
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
       

  <b-nav-item  v-if="!authenticatedUser" to="/login" right>Login</b-nav-item>
  <!-- <b-item-text v-if="authenticatedUser">{{$nuxt.$fire.auth.currentUser.email}}</b-item-text> -->
   <b-button @click.prevent="logout"  v-if="authenticatedUser" type="submit" variant="primary">Logout</b-button>
       
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
export default {

  data(){
    return{
       authenticatedUser: null,
    }
  },
   created() {
    this.$fire.auth.onAuthStateChanged(user => (this.authenticatedUser = user))
  },
  methods:{
    logout() {
     
    this.$fire.auth.signOut()
  }
  }
}
</script>