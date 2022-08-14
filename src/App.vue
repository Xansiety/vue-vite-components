 <script setup>
  import { ref } from 'vue'
  import ButtonComponent from './components/ButtonComponent.vue'
  import BlogPostComponent from './components/BlogPostComponent.vue'

  const posts = ref([
      { id: 1, title: "Post 01", body: "Descrión del post 01" },
      { id: 2, title: "Post 02", body: "Descrión del post 02" },
      { id: 3, title: "Post 03", body: "Descrión del post 03"  },
      { id: 3, title: "Post 04" },
  ]);

 </script> 

<template> 
<div class="container">
   <h1> App </h1> 
   <br>
   <!-- PascalCase: <ButtonComponent /> -->
   <ButtonComponent />
   <br>

   <BlogPostComponent v-for="post in posts" :key="post.id" :title="post.title" :id='post.id' :body="post.body" colorText="primary"/> 
</div> 
   <!-- or  -->

   <!-- kebab-case: <ButtonComponent></ButtonComponent> -->
   <!-- si usamos vue con un cdn debemos de utilizar esta forma para importar los componentes -->
   <!-- <ButtonComponent></ButtonComponent> -->
   
</template> 

<style lang='scss' scoped> 

</style>