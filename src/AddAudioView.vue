<script setup>
import {ref} from "vue";
import {databaseStorage} from "@/data/data_store.ts";
import {useRouter} from "vue-router";

const name = ref("")
const minutes = ref(1)
const seconds = ref(0)
const genre = ref("")

const router = useRouter()
</script>

<template>
  <div class="add-audio-form">
    <h1>Добавление аудио</h1>
    <label>
      Название
      <input v-model="name"/>
    </label>

    <label>
      Длительность
      <input v-model="minutes" type="number" min="0"/>
      :
      <input v-model="seconds" type="number" min="-1" max="60" @change="event => {
      console.log(event.target.value)
      if (event.target.value === '-1') {
        seconds = 59
        minutes -= 1
      }
      if (event.target.value === '60') {
        seconds = 0
        minutes += 1
      }

    }"/>
    </label>

    <label>
      Жанр
      <input v-model="genre"/>
    </label>
    <button :disabled="name === '' || genre === '' || (minutes === 0 && seconds === 0)" @click="() => {
    databaseStorage.audioFiles.push({
      name,
      genre,
      durationSeconds: minutes * 60 + seconds,
      authorEmail: databaseStorage.currentUserEmail,
      loadDate: Date(),
      id: databaseStorage.audioFiles.length > 0 ? Math.max(...databaseStorage.audioFiles.map(audio => audio.id)) + 1 : 1
    })
    router.push('/')
  }">Добавить
    </button>
  </div>
</template>

<style scoped>
.add-audio-form {
  display: flex;
  gap: 20px;
  flex-direction: column;
  width: 400px;
  margin: 15px auto 0 auto;
}

label {
  display: flex;
  gap: 15px;
}

label input {
  flex-grow: 1;
}
</style>