<script setup>
import { ref, onMounted } from 'vue'
import { fetchGolfCourses } from '../goraApi'

const golfCourses = ref([])
const loading = ref(true)
const error = ref('')

onMounted(async () => {
  loading.value = true
  error.value = ''
  const res = await fetchGolfCourses({ hits: 20 }) // 20件取得
  if (res && res.Items) {
    golfCourses.value = res.Items.map(item => item.Item)
  } else {
    error.value = 'データ取得に失敗しました'
  }
  loading.value = false
})
</script>

<template>
  <h1>ゴルフ場一覧</h1>
  <div v-if="loading">読み込み中...</div>
  <div v-else>
    <div v-if="error" style="color:red">{{ error }}</div>
    <ul v-else>
      <li v-for="course in golfCourses" :key="course.golfCourseId" style="margin-bottom:1em">
        <strong>{{ course.golfCourseName }}</strong><br>
        住所: {{ course.address }}<br>
        電話: {{ course.telephone }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
li {
  background: #f8f8f8;
  border-radius: 8px;
  padding: 1em;
  margin-bottom: 1em;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
</style>
