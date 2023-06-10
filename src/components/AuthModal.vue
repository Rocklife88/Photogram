<script setup>
import { ref, defineProps, reactive } from 'vue';
import { useUserStore } from '../stores/users';
import {storeToRefs} from "pinia"

    const userStore = useUserStore()
    const {errorMessage} = storeToRefs(userStore)
     const props = defineProps(['isLogin'])
     const visible = ref(false);

     const userCredentials = reactive ({
      email:"",
      password:"",
      username:""

     })

    



    const showModal = () => {
      visible.value = true;
    };

    const handleOk = (e) => {
   userStore.handleSignUp(userCredentials)
    };

    const title= props.isLogin ? 'Login' :'Signup'
    

</script>


<template>

    <div>
      <AButton class="btn-primary" type="primary" @click="showModal">{{title }}</AButton>
      <AModal v-model:visible="visible" :title="title" @ok="handleOk">
        <AInput v-if="!isLogin" class="input" v-model:value="userCredentials.username" placeholder="Username" />
        <AInput class="input" v-model:value="userCredentials.email" placeholder="Email" />
        <AInput class="input" v-model:value="userCredentials.password" placeholder="Password" />
        <ATypographyText v-if="errorMessage" type="danger">{{ errorMessage }}</ATypographyText>
      
      </AModal>
    </div>
  </template>

<style scoped>
.input{
 margin-bottom:16px;
 border-radius:4px;

}

.btn-primary{
  margin-left:16px;
}
</style>
 