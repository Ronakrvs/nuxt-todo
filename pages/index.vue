<template>
  <!-- <div>
   <div v-for="tasks of task" :key="tasks.id">
   <p>{{tasks.title}}= {{tasks.description}}</p> 
  
    </div>

 </div> -->
  <div style="margin: 2%" v-if="authenticatedUser">
   
    <b-col lg="24" class="my-1">
      <b-form-group
        label="Filter"
        label-for="filter-input"
        label-cols-sm="6"
        label-align-sm="right"
        label-size="lg"
        class="mb-3"
      >
        <b-input-group size="lg">
          <b-form-input
            id="filter-input"
            v-model="searchQuery"
            type="search"
            placeholder="Type to Search"
          ></b-form-input>

          <b-input-group-append> </b-input-group-append>
        </b-input-group>
      </b-form-group>
    </b-col>
    <b-button @click="gettask()" variant="primary"> All</b-button>
    <b-button @click="activetask(task)" variant="primary">Active</b-button>
    <b-button @click="completedtask(task)" variant="primary"
      >Completed</b-button
    >
    <div v-if="loaded">
      <div v-for="tasks of val" :key="tasks.id">
        <b-card
          bg-variant="dark"
          text-variant="white"
          :title="`${tasks.title}`"
        >
          <b-card-text>
            {{ tasks.description }}
          </b-card-text>
        
       <b-card-text  bg-variant="dark" class="float-right ">{{tasks.status}}</b-card-text>
         
          <b-button  bg-variant="dark" class="float-right " @click="changestatus(tasks)" variant="primary"
            >change status</b-button
          >
          <b-button @click="updatetask(tasks)" variant="primary"
            >Update</b-button
          >
          <b-button @click="deletetask(tasks.id)" variant="primary"
            >Delete</b-button
          >
        </b-card>
      </div>
    </div>
    <div v-else>
      <b-spinner label="Spinning"></b-spinner>
    </div>
  </div>
  <div v-else class="content" style="align-items: center;
    margin: auto;
    width: fit-content;
    float: revert;">
    <h1 style="float:center">Welcome to the TODO App </h1>
    <h3>Login to Create Task</h3>
    <nuxt-link to="/login">Login</nuxt-link>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      searchQuery: null,
      loaded: false,
      selected: null,
   
      authenticatedUser:null,
    }
  },
  computed: {
    ...mapGetters('task', ['task']),
    val() {
      if (this.searchQuery) {
        this.loaded = true
        return this.task.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(' ')
            .every((v) => item.title.toLowerCase().includes(v))
        })
      } else {
        this.loaded = true
        return this.task
      }
    },
  },
  mounted() {
    this.loaded = false
    this.gettask()
    setTimeout(() => {
      this.loaded = true
    }, 2000)
  },
   created() {
    this.$fire.auth.onAuthStateChanged(user => (this.authenticatedUser = user))
  },
  methods: {
    ...mapActions('task', ['gettask', 'deletetask', 'cleartask','statustask','activetask','completedtask']),
    updatetask(task) {
      this.$router.push({
        path: '/createtask',
        query: task,
      })
    },
    changestatus(id){

   
      this.statustask(id)
    },
  //   activetask(task){
    
  // this.val =   this.task.filter((item)=>{
  //     return  item.status === "Active"
  //     })
  // return this.task
  //   },
  //     completedtask(task){
    
  //    this.task.filter((item)=>{
  //     return  item.status === "Active"
  //     })
  // return this.task
  //   }
  

  }
}
</script>
