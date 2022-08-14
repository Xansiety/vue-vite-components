<!-- si no hacemos uso de setup en script es necesario retornar todas las propiedades,
setup retorna de forma explicita por defecto -->
<!-- COMPOSITION API -->
<!-- <script>
  import { ref } from 'vue'

  export default {
    // `setup` is a special hook dedicated for composition API.
    setup() {
      const count = ref(0)

      function increment() {
        count.value++
      }

      // expose the state to the template
      return {
        count,
        increment
      }
    }
  }
</script> -->
 
 <!-- COMPOSITION API -->
<!-- <script setup> </script>  -->


<!-- OPTIONS API -->
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>

<template> 
   <h1> App counter </h1> 
   <button @click="increment">Incrementar {{count}} </button>
</template> 

<style lang='scss' scoped> 

</style>