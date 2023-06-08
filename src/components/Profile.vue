

<script setup>
import Container from './Container.vue';
import UserBar from "./UserBar.vue"
import ImageGallery from './ImageGallery.vue';




</script>


<template>
<Container>
    <div class="profile-container">
 <UserBar
 username="marcopelelgrini"
 :userInfo="{
    posts:4,
    followers:100,
    following:342

 }"
 />
<ImageGallery :posts="[{
    id:1,
    image:'https://xsgames.co/randomusers/assets/avatars/male/63.jpg'

}]"/>
</div>
</Container>
</template>



<style scoped>

.profile-container{
    display:flex;
    flex-direction:column;
    padding:20px 0;
}

</style>