<script setup>
import {RouterLink} from "vue-router"
import {ref} from "vue"
import Container from "./Container.vue"
import AuthModal from "./AuthModal.vue"


const searchUsername= ref("")
const onSearch = () => {}


</script>



<template>

        <ALayoutHeader>
 <Container>
        <div class="nav-container">
                <div class="right-content">
                        <RouterLink to="/">PhotoGram</RouterLink>
                        <AInputSearch
                        v-model:value="searchUsername"
                        placeholder="Username..."
                        style="width: 200px"
                        @search="onSearch"
                      />
                     

                </div>

                <div class="left-content">
                        <AButton type="primary">Sign Up</AButton>
                        <AuthModal/>

                </div>
            


        </div>

     
 </Container>
                  

     
    


          </ALayoutHeader>
         


</template>



<style scoped>

.nav-container{
        display:flex;
        align-items:center;
        justify-content: space-between;
}

.right-content{
        display:flex;
        align-items: center;

}

.right-content a{
        margin-right:10px;
}

.left-content button{
        margin-left:10px;
        margin-right:10px;
    
}

.left-content{
        display:flex;
        align-items:center;
}


</style>