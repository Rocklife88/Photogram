import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('users', () => {
  const user = ref(null);

  const handleLogin = () => {}



  const handleSignUp = () => {}



  const handleLogout = () => {}



  const getUser = () => {}



  return { user, handleLogout, handleSignUp,handleLogin, getUser }
})
