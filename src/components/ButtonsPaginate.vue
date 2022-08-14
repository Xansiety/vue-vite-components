<script setup>
import { ref , computed} from 'vue' 
   const emits = defineEmits(['nextName', 'prevName','currentPageName'])

  const props = defineProps({
    inicio: {
      type: Number,
      default: 0,
      required: true
    },
    fin: {
        type: Number,
      default: 10,
        required: true
    },
    maxLength: {
        type: Number,
        default: 0,
        required: true
    }})

 
const prevDisabled = ref(false)
const nextDisabled = ref(false)

 const desactivarPrev = computed(() => { 
    return props.inicio <= 0 ? true : false;
 })

  const desactivarNext = computed(() => {
     return props.fin >= props.maxLength ? true : false;
 }) 
 
   const activarSiguiente = () => {
    //  console.log('Siguiente');
     emits('nextName')
   }
</script> 

<template> 
     <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" 
        class="btn btn-outline-primary"
        @click="emits('prevName')"
        :disabled="desactivarPrev">Previous {{props.inicio}}</button> 
        <!-- <select name="Cantidad de registros" class="btn-group" role="group" aria-label="Basic example"
            @change="$emit('currentPageName', $event.target.value)">
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
            <option>50</option>
        </select> -->
        <button type="button" 
        class="btn btn-outline-primary" 
        @click="activarSiguiente"
        :disabled="desactivarNext">Next {{props.fin}}</button>
    </div>
</template> 

<style lang='scss' scoped> 

</style>