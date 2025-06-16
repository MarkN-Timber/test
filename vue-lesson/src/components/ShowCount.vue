<script setup>
defineProps({
  foo: {
    type: Number,
    default: function () {
      return 100
    },
  },
})
</script>
<template>
  <p>count:{{ foo }}</p>
</template>
