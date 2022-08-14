<script setup>
import { ref } from 'vue' 
     const counter = ref(0)
     const increment = () => {
         counter.value++
     }
</script> 

<template> 
     <h1> Counter  Component</h1> <br> 
        <button @click="increment"> Increment {{counter}}</button>
</template> 

<style lang='scss' scoped> 

</style>