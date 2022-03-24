<template>
  <div>
    <b-form class="login" @submit="onSubmit" @reset="onReset" v-if="show">
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

      <b-form-group id="input-group-2" label="Your password:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="password"
          v-model="form.password"
          placeholder="Enter Password"
          required
        ></b-form-input>
      </b-form-group>

     
     

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    <b-link to="/signup">Create an account, Signup</b-link>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
          
          checked: []
        },
      
        show: true
      }
    },
    methods: {
     async onSubmit(event) {
       event.preventDefault()
    
      try {
        await this.$fire.auth.signInWithEmailAndPassword(
          this.form.email,
          this.form.password
        );
        this.$router.push("/");
      } catch (e) {
   
      alert("email and password does not match")
      }
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
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
.login{
    width: 50%;
    align-items: center;
    margin: auto;
    border: 2px solid;
    padding: 91px;
    margin-top: 2%;
}
</style>