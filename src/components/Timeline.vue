

<script setup>
import Card from './Card.Vue';
import Container from './Container.vue';


const data = [
    {
       id:1,
       username: 'Bruce Sprinsgteen',
       url: 'https://www.rollingstone.it/wp-content/uploads/2022/11/BRUCE_2023_press.jpg',
       caption:'Tramps like us, baby we were born to run'
    },
    {
       id:2,
       username: 'BonoVox',
       url: 'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2018/01/bono-vox.jpg',
       caption:'One love, we get to share it'
    }

]

</script>


<template>
<Container>
    <div class="timeline-container">
   <Card 
   v-for="post in data" 
   :key="post.id" 
   :post="post"/>
</div>
</Container>
</template>



<style scoped>

.timeline-container{
    display:flex;
    flex-direction:column;
    align-items: center;
    padding:20px 0;
}

</style>