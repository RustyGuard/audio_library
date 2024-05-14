<script setup>

import AudioList from "@/components/AudioList.vue";
import {databaseStorage} from "@/data/data_store.ts";
import {computed} from "vue";

const currentUser = computed(() =>
    databaseStorage.users.find(user => user.email === databaseStorage.currentUserEmail)
)

const liked = computed(() => {
  return databaseStorage.audioFiles.filter(audio => currentUser.value.likedAudioIds.includes(audio.id))
})

const audioWithLikeState = computed(() => {
  return liked.value.map(
      audio => ({
        ...audio,
        liked: true
      })
  )
})

</script>

<template>
  <h1>Понравившееся</h1>
  <AudioList
  :audio-files="audioWithLikeState"
  :show-like-button="true"
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