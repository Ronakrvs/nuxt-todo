<template>
  <div >
    <b-form class="task" @submit.prevent="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Enter Title:"
        label-for="input-1"
       
      >
        <b-form-input
          id="input-1"
          v-model="form.title"
          type="text"
          placeholder="Enter Title"
          required
        ></b-form-input>
      </b-form-group>
  <b-form-group
        id="input-group-2"
        label="Enter Description:"
        label-for="input-2"
       
      >
       <b-form-textarea
      id="textarea"
      v-model="form.description"
      placeholder="Enter something..."
      rows="6"
      max-rows="6"
      required
    ></b-form-textarea>
</b-form-group>
    

      <b-button v-show="!$route.query.id" type="submit" variant="primary">Submit</b-button>
      <b-button v-show="$route.query.id" type="submit" variant="primary">update</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

  export default {
  
    data() {
      return {
        form: {
          title: this.$route.query.title ? this.$route.query.title : '',
          description: this.$route.query.description ?  this.$route.query.description : '',
          status:"active",
          
         
        },
        authenticatedUser:null,
       
        show: true
      }
    },
    methods: {
       ...mapActions("task", ["createtask", "updatetask"]),

      onSubmit(event) {
        //   this.$store.dispatch('task',['createtask'])
        event.preventDefault()
        if(!this.$route.query.id){
         this.createtask(this.form)
        }
        else{
         this.form.id = this.$route.query.id
          this.updatetask(this.form)
        }
       this.$router.push( {
					path: '/',
				
				} )

       
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.title = ''
        this.form.description = ''
        
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },
     created() {
    this.$fire.auth.onAuthStateChanged(user => (this.authenticatedUser = user))
  },
  }
</script>
<style scoped>
.task{
     width: 50%;
    align-items: center;
    margin: auto;
    border: 2px solid;
    padding: 91px;
    margin-top: 2%;

}
</style>