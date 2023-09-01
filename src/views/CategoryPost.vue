<script setup>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import BlogList from '../components/BlogList.vue';
let errorMsg = ref('')
let loading = ref(true)

const props = defineProps({
    id: {
        required: true,
        type: String
    }
})

const route = useRoute()
const userData = ref(null)

async function fetchDataFirstTime() {
    try {
        const response = await fetch(`https://basic-blog.teamrabbil.com/api/post-list/${props.id}`);
        const result = await response.json();
        userData.value = result
        loading.value = false
    } catch (error) {
        errorMsg.value = 'Something went wrong to fetch data. Please try again later'
    }
}
fetchDataFirstTime()

async function fetchData(id) {
    try {
        const response = await fetch(`https://basic-blog.teamrabbil.com/api/post-list/${id}`);
        const result = await response.json();
        loading.value = false;
        return result
    } catch (error) {
        errorMsg.value = 'Something went wrong to fetch data. Please try again later'
    }
}
watch(() => route.params.id,
    async id => {
        userData.value = await fetchData(id)
    }
)
</script>

<template>
    <section class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-12"  v-if="loading">
                    <p> Data is loading...</p>
                </div>
                <BlogList :post-lists="userData"  v-else-if="!loading"></BlogList>
                <div class="col-md-12"  v-else>
                    <p class="col-md-12 info">{{ errorMsg }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>