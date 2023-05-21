<script setup>
const { questionStatus, barPercentage } = defineProps(['questionStatus', 'barPercentage'])

</script>


<template>
    <header>
        <h4>{{ questionStatus }}</h4>
        <div class="bar">
            <div class="completion" :style="{ width: barPercentage }"></div>
        </div>
    </header>
</template>
<style scoped>
header {
    margin-top: 20px;
}

header h4 {
    font-size: 30px;
}

.bar {
    border: 3px solid rgb(20, 141, 141);
    width: 300px;
    height: 50px;
}

.completion {
    height: 100%;
    width: 0%;
    background-color: rgb(20, 141, 141);
}
</style>