<script setup>
import { ref } from 'vue' 
     const counter = ref(0)
     const increment = () => {
         counter.value++
     }
</script> 

<template> 
<div class="card">
     <div class="card-title text-black">Contador componente</div>
     <div class="card-body"> <button @click="increment"> Increment {{counter}}</button>
     </div>
</div>
</template> 

<style lang='scss' scoped> 

</style>