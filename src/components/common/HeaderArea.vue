<script setup>
import { ref, onBeforeMount } from 'vue';
import { RouterLink } from 'vue-router'

let categories = ref({})
onBeforeMount(() => {
  const URL = 'https://basic-blog.teamrabbil.com/api/post-categories'
  async function getCategories() {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      categories.value = data
    } catch (error) {
      console.log(error);
    }
  }
  getCategories()
})
</script>

<template>
  <header class="header-area">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <nav class="main-menu">
            <ul>
              <li>
                <RouterLink to="/">সর্বশেষ</RouterLink>
              </li>
              <li v-for="(category, index) in categories" :key='index'>
                <RouterLink :to="{name: 'category', params:{id: `${category['id']}`}}">{{ category['name'] }}</RouterLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header-area {
  padding: 20px 0px;
  border-bottom: 1px solid #dddddd;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

ul li {
  display: inline-block;
}

ul li a {
  display: block;
  padding: 10px 25px;
  text-decoration: none;
  color: #222222;
  position: relative;
  transition: all ease-in 0.3s;
}

ul li:not(:last-child) a:after {
  content: "";
  position: absolute;
  height: 25%;
  width: 1px;
  right: 0;
  top: 40%;
  background-color: #999;
}

ul li a:before {
  content: "";
  position: absolute;
  width: 0%;
  left: 50%;
  bottom: 7px;
  border-bottom: 2px double #ad65fc;
  transition: all ease-in 0.3s;
}

ul li a:hover:before {
  width: 60%;
  left: 20%;
}

ul li a:hover {
  color: #ad65fc;
}</style>