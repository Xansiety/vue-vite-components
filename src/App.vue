 <script setup>
  import { ref } from 'vue' 
  import BlogPostComponent from './components/BlogPostComponent.vue'
  import ButtonsPaginate from './components/ButtonsPaginate.vue' 
  
  const posts = ref([])
  const favorito = ref('');

  const itemsPorPagina = ref(10) 

  // const currentPage = (number) => {
  //   console.log(number);
  //   itemsPorPagina.value = parseInt( number ); 
  // }

  //pagination
  const pagination = ref({
    start: 0,
    end: itemsPorPagina.value, 
  })
 
  const cambiarFavorito = (title) => {
    favorito.value = title;
  } 

  const next = () => { 
      pagination.value.start = pagination.value.start + itemsPorPagina.value;
      pagination.value.end = pagination.value.end + itemsPorPagina.value;
  }

  const previous = () => { 
       pagination.value.start += -itemsPorPagina.value;
       pagination.value.end += -itemsPorPagina.value;
  }
 
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    posts.value = data
  })
  .catch(error => console.log(error)) 
 </script> 
 
<template> 
  <div class="container"> 
    <div class="card mt-3 ">
      <div class="card-title"><h2>Mi Post Favorito: {{favorito ? favorito : 'No hay ningún post fijado'}}</h2></div>

      <ButtonsPaginate 
       @nextName="next"
       @prevName="previous" 
       @currentPageName="currentPage"
       :inicio="pagination.start"
       :fin="pagination.end"
       :maxLength="posts.length"
      />

      <div class="card-body"> 
            <!--  <BlogPostComponent v-for="post in posts" :key="post.id" :title="post.title" :id='post.id' :body="post.body" colorText="primary"
            @cambiarFavoritoNombre="cambiarFavorito" /> --> <!-- Enviamos un evento personalizado para que nuestro componente hijo, pueda afectar a muestro componente padre-->
            <!-- mandar eventos personalizados como props--> 
            <BlogPostComponent v-for="post in posts.slice(pagination.start, pagination.end)" 
            :key="post.id" 
            :title="post.title" :id='post.id' :body="post.body" colorText="primary"
            :cambiarFavorito="cambiarFavorito"
            @cambiarFavoritoNombre="cambiarFavorito" 
            class="mb-3"/>  
      </div>
    </div> 
  </div>   
</template> 

 