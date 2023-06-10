import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('users', () => {
  const user = ref(null);
  const errorMessage = ref("")

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = () => {}



  const handleSignUp = (credentials) => {
    const {email, password,username} = credentials

    if ( password.length < 6){
      return errorMessage.value ="password needs to be at least 6 characters"
    }

  if (!validateEmail(email)){
    return errorMessage.value ="email is not valid"
  }

  if ( username.length < 4){
    return errorMessage.value ="username needs to be at least 6 characters"
  }
}



  const handleLogout = () => {}



  const getUser = () => {}



  return { user, errorMessage, handleLogout, handleSignUp,handleLogin, getUser }
})

