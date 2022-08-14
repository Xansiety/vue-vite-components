<script setup>
import { ref } from 'vue'  
//registrar los prop que enviamos a este componente
// String, Number, Boolean, Array, Object, Date, Function, Symbol valores que podemos recibir en el componente
defineProps({
    id: {
        type: Number,
        default: 0,
    },
    title: String ,
    body: {
        type: String,
        // required: true,
        default: 'Sin descripción',
    },
    colorText: {
        type: String,
        default: 'primary',
    },
    cambiarFavorito: Function, //no se sugiere realizar esto, siempre optar por un evento personalizado y un emit
})

//podemos definir los emits como array de strings
const emit = defineEmits(['cambiarFavoritoNombre'])

//emit para poder ser accedido desde el setup
//emit('cambiarFavorito', title)
  

</script>       

<template> 
     <div class="card">
        <div class="card-body d-flex justify-content-between ">
            <div class="">
                <h5 class="card-title" :class="`text-${colorText}`"> {{id}} - {{title}}</h5>
                <p> {{ body }} </p>
            </div> 
            <!-- Podemos acceder a $emit para poder capturar el evento personalizado que le estamos enviando a nuestro componente-->
            <button class="btn btn-outline-success" @click="emit('cambiarFavoritoNombre', title)"> ⭐ </button>
            
            
            <!-- Para trabajar con function props la forma de llamarlos cambia por esta forma -->
            <!-- <button class="btn btn-outline-success" @click="cambiarFavorito(title)"> ⭐ </button> -->
        </div>
     </div>
</template> 


<style lang='scss' scoped> 

</style>