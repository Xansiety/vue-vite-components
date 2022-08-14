 <script setup>
  import { ref } from 'vue' 
  import BlogPostComponent from './components/BlogPostComponent.vue'

  const posts = ref([
      { id: 1, title: "Post 01", body: "Descrión del post 01" },
      { id: 2, title: "Post 02", body: "Descrión del post 02" },
      { id: 3, title: "Post 03", body: "Descrión del post 03"  },
      { id: 3, title: "Post 04" },
  ]);


  const favorito = ref('');

  const cambiarFavorito = (title) => {
    favorito.value = title;
  }
 </script> 
 
<template> 
<div class="container"> 
  <div class="card mt-3 ">
    <div class="card-title"><h2>Mis Post Favorito: {{favorito ? favorito : 'No hay ningún post fijado'}}</h2></div>
    <div class="card-body">
       <!--  <BlogPostComponent v-for="post in posts" :key="post.id" :title="post.title" :id='post.id' :body="post.body" colorText="primary"
       @cambiarFavoritoNombre="cambiarFavorito" /> --> <!-- Enviamos un evento personalizado para que nuestro componente hijo, pueda afectar a muestro componente padre-->
      <!-- mandar eventos personalizados como props--> 
          <BlogPostComponent v-for="post in posts" :key="post.id" :title="post.title" :id='post.id' :body="post.body" colorText="primary"
          :cambiarFavorito="cambiarFavorito"
          @cambiarFavoritoNombre="cambiarFavorito" />  
    </div>
  </div> 
</div>   
</template> 

<style lang='scss' scoped> 

</style>