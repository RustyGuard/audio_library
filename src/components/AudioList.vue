<script setup>
import LikeButton from "@/components/LikeButton.vue";

defineEmits(["audioLiked", "audioUnliked"])
defineProps(['audioFiles', 'showLikeButton'])
</script>

<template>
  <h2 v-if="audioFiles.length === 0">Пока пусто...</h2>
  <div class="audio-list">
    <div class="audio-item" v-for="audio in audioFiles">
      <div>{{ audio.id }}</div>
      <div>{{ audio.name }}</div>
      <div>{{ audio.genre }}</div>
      <div>{{ audio.authorEmail }}</div>
      <div>{{ Math.floor(audio.durationSeconds / 60) }}:{{ (audio.durationSeconds % 60).toString().padStart(2, '0') }}</div>
      <LikeButton v-if="showLikeButton" :liked="audio.liked" @change="likeState => {
        if (likeState) {
          $emit('audioLiked', audio.id)
        }
        else {
          $emit('audioUnliked', audio.id)
        }
      }"/>
    </div>
  </div>

</template>

<style scoped>
h2 {
  text-align: center;
}

@media screen and (min-width: 1000px) {
  .audio-list {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (min-width: 1500px) {
  .audio-list {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.audio-item {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 25px;
  margin: 10px 25px;

  border-style: solid;
  border-width: 1px;
  border-color: #666666;
}
</style>