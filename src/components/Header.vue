<script setup>

import {databaseStorage} from "@/data/data_store.ts";
import {computed} from "vue";
import SelectAccount from "@/components/SelectAccount.vue";
import {useRouter} from "vue-router";

const currentUser = computed(() =>
    databaseStorage.users.find(user => user.email === databaseStorage.currentUserEmail)
)

const router = useRouter()
</script>

<template>
  <header>
    <div @click="router.push('/')" class="add-song">На главную</div>
    <div v-if="currentUser !== undefined" @click="router.push('/add_audio')" class="add-song">Добавить аудио</div>
    <div v-if="currentUser !== undefined" @click="router.push('/liked')" class="show-liked">Понравившееся</div>
    <SelectAccount />
<!--    <template>-->
<!--      <span class="login" @click="router.push('/user')">Войти в аккаунт</span>-->
<!--    </template>-->
  </header>
</template>

<style scoped>
.login {
  padding: 10px 15px;
  cursor: pointer;
}

.add-song {
  padding: 10px 15px;
  cursor: pointer;
}

.add-song:hover {
  background-color: #181818;
}

.show-liked {
  padding: 10px 15px;
  cursor: pointer;
}

.show-liked:hover {
  background-color: #181818;
}

header {
  background-color: #2c3e50;
  color: white;
  padding: 5px 10px;
  display: flex;
  justify-content: end;
  align-items: center;
}
</style>