<script setup>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import BlogList from '../components/BlogList.vue';
let errorMsg = ref('')
let loading = ref(true)

const route = useRoute()
const userData = ref(null)

async function fetchDataFirstTime() {
  try {
    const response = await fetch(`https://basic-blog.teamrabbil.com/api/post-newest`);
    const result = await response.json();
    userData.value = result
    loading.value = false
  } catch (error) {
    errorMsg.value = 'Something went wrong to fetch data. Please try again later'
  }
}
fetchDataFirstTime()
</script>

<template>
  <section class="section-padding">
    <div class="container">
      <div class="row">
        <div v-if="loading">
          <p> Data is loading...</p>
        </div>
        <template v-else-if="!loading">
          <BlogList :post-lists="userData"></BlogList>
        </template>
        <div v-else>
          <p>{{ errorMsg }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>