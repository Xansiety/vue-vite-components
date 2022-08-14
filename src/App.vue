 <script setup>
  import ButtonComponent from './components/ButtonComponent.vue'

 </script> 

<template> 
<div class="container">
   <h1> App counter </h1> 
   <br>
   <!-- PascalCase: <ButtonComponent /> -->
   <ButtonComponent />
   <br>
   <ButtonComponent />
</div> 
   <!-- or  -->

   <!-- kebab-case: <ButtonComponent></ButtonComponent> -->
   <!-- si usamos vue con un cdn debemos de utilizar esta forma para importar los componentes -->
   <!-- <ButtonComponent></ButtonComponent> -->
   
</template> 

<style lang='scss' scoped> 

</style>