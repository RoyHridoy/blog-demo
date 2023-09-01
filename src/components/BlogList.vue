<script setup>
import { RouterLink } from 'vue-router'
defineProps({
    postLists: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="col-md-4" v-for="(postList, index) in postLists" :key="index">
        <div class="single-blog">
            <div class="post-img">
                <img :src="postList.img" :alt="postList['title']">
            </div>
            <div class="post-content">
                <h3 class="post-title">
                    <RouterLink :to="{ name: 'postDetails', params: { id: postList['id'] } }">{{ postList['title'] }}</RouterLink>
                </h3>
                <p class="date">
                    <span class="created">{{ (new Date(postList['created_at']).toDateString()) }}</span>
                    <span class="updated">{{ (new Date(postList['updated_at']).toDateString()) }}</span>
                </p>
                <p class="description">{{ postList['short'] }}</p>
                <RouterLink :to="{ name: 'postDetails', params: { id: postList['id'] } }" class="button">বিস্তারিত পড়ুন</RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
img {
    max-width: 100%;
}
</style>