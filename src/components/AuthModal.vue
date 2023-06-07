<script setup>
import { ref } from 'vue';
    const visible = ref(false);

    const showModal = () => {
      visible.value = true;
    };

    const handleOk = (e) => {
      console.log(e);
      visible.value = false;
    };

    

</script>


<template>
    <div>
      <AButton type="primary" @click="showModal">Open Modal</AButton>
      <AModal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </AModal>
    </div>
  </template>

 