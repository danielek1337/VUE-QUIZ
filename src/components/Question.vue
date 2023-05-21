<script setup>

const { question } = defineProps(['question'])

const emit = defineEmits(['selectOption'])

const emitSelectedOption = (isCorrect) => {
    emit("selectOption", isCorrect)
}

</script>
<template >
    <div class="question-container">
        <h1 class="question">
            {{ question.text }}
        </h1>
    </div>
    <div class="options-container">
        <div class="option" v-for="option in question.options" :key="option.id"
            @click="emitSelectedOption(option.isCorrect)">
            <p class="option-label">{{ option.label }}</p>
            <div class="option-value">
                <p>{{ option.text }}</p>
            </div>
        </div>

    </div>
</template>
<style scoped>
.question-container {
    margin-top: 20px
}


.question {
    font-size: 40px;
    margin-bottom: 20px;
}

.option {
    display: flex;
    align-items: center;
    cursor: pointer;

}

.option-label {
    background-color: rgb(20, 141, 141);
    width: 50px;
    height: 50px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
}

.option-value {
    background-color: rgba(93, 223, 223, 0.2);
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 30px;
    height: 50px;
    padding: 0 20px;
}

.option:hover {
    border-radius: 10%;
    background-color: rgba(123, 122, 122, 0.15);
}
</style>