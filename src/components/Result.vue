<script setup>
import { RouterLink } from 'vue-router';


const { resultStatus } = defineProps(['resultStatus'])
</script>

<template>
    <div class="results">
        <p>Your Results...</p>
        <h1>{{ resultStatus }}</h1>
        <RouterLink to="/">Go back</RouterLink>
    </div>
</template>

<style scoped>
.results {
    text-align: center;
    padding: 100px 0;

}

p {
    font-size: 25px;
}

h1 {
    font-size: 80px;
}

.results a {
    text-decoration: none;
    color: black;
    font-size: 2rem;
    padding: 10px;
    border-radius: 10%;
    background-color: rgba(83, 161, 161, 0.278);
}

.results a:hover {
    background-color: rgba(24, 105, 105, 0.534);
    color: white
}
</style>