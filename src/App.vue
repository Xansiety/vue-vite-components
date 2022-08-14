 <script setup>
  import ButtonComponent from './components/ButtonComponent.vue'
  import BlogPostComponent from './components/BlogPostComponent.vue'

 </script> 

<template> 
<div class="container">
   <h1> App </h1> 
   <br>
   <!-- PascalCase: <ButtonComponent /> -->
   <ButtonComponent />
   <br>
   <BlogPostComponent title="Post 01" :id='1' body="descipcion 01" colorText="primary"/>
   <BlogPostComponent title="Post 02" :id='2' body="descipcion 02" colorText="secondary"/>
   <BlogPostComponent title="Post 03" :id='3' body="descipcion 03" colorText="success"/>
   <BlogPostComponent title="Post 04" :id='4' colorText="primary"/>
</div> 
   <!-- or  -->

   <!-- kebab-case: <ButtonComponent></ButtonComponent> -->
   <!-- si usamos vue con un cdn debemos de utilizar esta forma para importar los componentes -->
   <!-- <ButtonComponent></ButtonComponent> -->
   
</template> 

<style lang='scss' scoped> 

</style>