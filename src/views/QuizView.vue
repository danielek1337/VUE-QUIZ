<script setup>
import Question from '../components/Question.vue';
import QuizHeader from '../components/QuizHeader.vue';
import Result from '../components/Result.vue'
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';
import quizes from "../data/quizes.json"


const route = useRoute()
const quizId = parseInt(route.params.id)
const currentQuestionIndex = ref(0)
const quiz = quizes.find(q => q.id === quizId)
const numberOfCorrectAnswers = ref(0)

const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`) // tracking changes in the returned value and computes every time it changes

const barPercentage = computed(() => `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`)

const resultStatus = computed(() => `${numberOfCorrectAnswers.value}/${quiz.questions.length}`)


const onOptionSelected = (isCorrect) => {
    if (isCorrect) {
        numberOfCorrectAnswers.value++
    }
    currentQuestionIndex.value++
}

</script>
<template >
    <div>
        <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />

        <div>
            <Question :question="quiz.questions[currentQuestionIndex]" :answers="quiz.questions"
                @selectOption="onOptionSelected" v-if="currentQuestionIndex != quiz.questions.length" />
            <Result v-else :resultStatus="resultStatus" />
        </div>
    </div>
</template>
<style >
* {
    font-family: 'Roboto', sans-serif;
}
</style>