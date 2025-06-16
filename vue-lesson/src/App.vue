<script setup>
import { ref } from 'vue'
import ShowCount from './components/ShowCount.vue'
const count = ref(0)
</script>
<template>
  <h1>Counter App</h1>
  <ShowCount :foo="count" bar="hello" />
  <button @click="count++">button</button>
</template>
