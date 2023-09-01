<script setup>
import { onMounted, reactive, ref } from 'vue';
let errorMsg = ref('বিস্তারিত আসছে শীঘ্রই, চোখ রাখুন আমাদের ব্লগে')
let loading = ref(true)
let postDetails = reactive({})

onMounted(async () => {
    try {
        const response = await fetch(`https://basic-blog.teamrabbil.com/api/post-details/${props.id}`)
        const result = await response.json()
        postDetails = result
        loading.value = false
    } catch (error) {
        errorMsg.value = ''
        loading.value = false
    }
})
const props = defineProps({
    id: {
        type: String,
        required: true
    }
})
</script>

<template>
    <section class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <p v-if="loading">Data is loading...</p>
                    <div class="post-details" v-else-if="!loading && postDetails.postDetails != null">
                        <img class="img-responsive" :src="postDetails.postDetails['img']"
                            :alt="postDetails.postDetails['title']" />
                        <div class="post-content">
                            <h2 class="post-title">{{ postDetails.postDetails['title'] }}</h2>
                            <p class="date"> 
                                <span class="created">Created at: {{ (new Date(postDetails.postDetails['created_at']).toDateString())
                                }}</span>
                                <span class="updated"> Updated at: {{ (new Date(postDetails.postDetails['updated_at']).toDateString())
                                }}</span>
                            </p>
                            <p class="description">{{ postDetails.postDetails['content'] }}</p>
                        </div>
                    </div>
                    <p v-else class="info">{{ errorMsg }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
img {
    max-width: 100%;
}
h2.post-title {
    margin-top: 40px;
    margin-bottom: 15px;
}
</style>