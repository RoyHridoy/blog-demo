<script setup>
import { RouterView } from 'vue-router'
import HeaderArea from './components/common/HeaderArea.vue';
import FooterArea from './components/common/FooterArea.vue';
</script>

<template>
  <HeaderArea/>
  <RouterView />
  <FooterArea/>
</template>

<style scoped></style>
