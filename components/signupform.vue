<template>
  <div>
    <b-form class="signup" @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Password:" label-for="input-3">
        <b-form-input
          id="input-3"
           type="password"
          v-model="form.password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Password:" label-for="input-3">
        <b-form-input
          id="input-3"
           type="password"
          v-model="form.confirmpassword"
          placeholder="Enter confirm password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>

        <b-link to="/login">Already have an account, Signin</b-link>
       
    </b-form>
   
  </div>
</template>
const { signup } from '~/utils/auth';
import firebase from 'firebase'
<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          password: '',
          confirmpassword:''
          
        },
       signup:this.signup,
        show: true
      }
    },
    methods: {
    async  onSubmit(event) {
          event.preventDefault()
        
        
         if (this.form.password === this.form.confirmpassword) {
             try{
     await this.$fire
        .auth
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
         
            this.$router.push({path:'/login'})
         }
          catch(e){
alert(e.message )
    }}
          else {
     alert("password does not match")
    }
   
        
       
      
        },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.password = ''
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
<style scoped>
.signup{
    width: 50%;
    align-items: center;
    margin: auto;
    border: 2px solid;
    padding: 91px;
    margin-top: 2%;
}
</style>