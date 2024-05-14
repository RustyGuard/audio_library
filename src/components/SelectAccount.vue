<script setup>
import {computed, ref} from "vue";
import {databaseStorage} from "@/data/data_store.ts";
import {useRouter} from "vue-router";

const currentUser = computed(() =>
    databaseStorage.users.find(user => user.email === databaseStorage.currentUserEmail)
)

const visible = ref(false)

const router = useRouter()
</script>

<template>
  <span @click="visible = !visible" class="select-user-button">{{ currentUser !== undefined ? currentUser.nickname : 'Не в аккаунте' }}</span>
  <div class="select-user-modal" v-if="visible">

    <span v-for="user in databaseStorage.users" @click="() => {
          databaseStorage.currentUserEmail = user.email
          visible = false
          router.push('/')
    }">
      {{ user.nickname }}
    </span>
    <span v-if="currentUser !== undefined" @click="visible = false;databaseStorage.currentUserEmail = null">Выйти из аккаунта</span>
    <span @click="visible = false;router.push('/user')">Добавить новый</span>
  </div>
</template>

<style scoped>
.select-user-button {
  cursor: pointer;
  padding: 10px 15px;
}

.select-user-button:hover {
  background-color: #181818;
}

.select-user-modal {
  background-color: #282828;
  position: absolute;
  top: 50px;
  display: flex;
  flex-direction: column;
}

.select-user-modal * {
  padding: 15px;
}

.select-user-modal *:hover {
  background-color: #181818;
  cursor: pointer;
}

</style>