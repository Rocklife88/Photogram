<script setup>
import { ref, defineProps } from 'vue';
    const visible = ref(false);

    const props = defineProps(['isLogin'])

    const showModal = () => {
      visible.value = true;
    };

    const handleOk = (e) => {
      console.log(e);
      visible.value = false;
    };

    const title= props.isLogin ? 'Login' :'Signup'
    

</script>


<template>
    <div>
      <AButton class="btn-primary" type="primary" @click="showModal">{{title }}</AButton>
      <AModal v-model:visible="visible" :title="title" @ok="handleOk">
        <AInput v-if="!isLogin" class="input" v-model:value="value" placeholder="Username" />
        <AInput class="input" v-model:value="value" placeholder="Email" />
        <AInput class="input" v-model:value="value" placeholder="Password" />
      
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
 