<script setup>

import {databaseStorage} from "@/data/data_store.ts";
import {computed, toRaw} from "vue";
import AudioList from "@/components/AudioList.vue";


const currentUser = computed(() =>
    databaseStorage.users.find(user => user.email === databaseStorage.currentUserEmail)
)

const audioWithLikeState = computed(() => {
  if (currentUser.value === undefined) return databaseStorage.audioFiles.map(
      audio => ({
        ...audio,
        liked: false
      })
  )
  console.log(5)
  console.log(currentUser.value.likedAudioIds)
  console.log(currentUser.likedAudioIds)
  return databaseStorage.audioFiles.map(
      audio => ({
        ...audio,
        liked: currentUser !== undefined ? currentUser.value.likedAudioIds.includes(audio.id) : false
      })
  )
})
</script>

<template>
  <h1>Обзор</h1>
  <AudioList
      :audio-files="audioWithLikeState"
      :show-like-button="currentUser !== undefined"
      @audio-liked="audio_id => {currentUser.likedAudioIds.push(audio_id)
    console.log(audio_id)
    console.log(currentUser.likedAudioIds)
    }"
      @audio-unliked="audio_id => {
        const index = currentUser.likedAudioIds.findIndex(list_audio_id => list_audio_id === audio_id)
         if (index >= 0) {
            currentUser.likedAudioIds.splice(index, 1)
         }
    }"
  />
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>