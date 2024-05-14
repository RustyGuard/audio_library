<script setup>

import {databaseStorage} from "@/data/data_store.ts";
import {ref} from "vue";
import {useRouter} from "vue-router";

const nickname = ref("")
const name = ref("")
const email = ref("")

const router = useRouter()
</script>

<template>
  <form @submit="event => {
  event.preventDefault()
  databaseStorage.users.push({
    nickname: nickname,
    name: name,
    email: email,
    register_date: Date(),
    likedAudioIds: [],
  })
  databaseStorage.currentUserEmail = email
  router.push('/')
}">
    <h1>Добавление пользователя</h1>
    <label>
      Имя
      <input v-model="name"/>
    </label>
    <label>
      Ник
      <input v-model="nickname"/>
    </label>
    <label>
      Email
      <input v-model="email"/>
    </label>
    <button :disabled="nickname === '' || name === '' || email === ''">Добавить</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
  gap: 20px;

}
label {
  display: flex;
  gap: 15px;
}

label input {
  flex-grow: 1;
}
</style>