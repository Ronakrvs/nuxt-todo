import firebase from 'firebase'

export default function ({ store, redirect }) {
  let user = firebase.auth().currentUser   
  store.state.user = user //this doesn't work
  if (!user) {
   
    return redirect('/login')   
  }
}