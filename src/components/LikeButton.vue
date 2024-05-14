<script setup>
defineProps(["liked"])
defineEmits(["change"])
</script>

<template>
  <div>
    <i @click="$emit('change', !liked)" :class="liked?'press':''"></i>
    <span :class="liked?'press':''">liked!</span>
  </div>
</template>

<style scoped>
i {
  cursor: pointer;
  padding: 10px 12px 8px;
  background: #fff;
  border-color: black;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
  display: inline-block;
  color: #aaa;
  transition: .2s;
}

i:hover {
  color: #666;
}

i:before {
  font-family: fontawesome;
  content: '\f004';
  font-style: normal;
}

span {
  position: absolute;
  bottom: 70px;
  left: 0;
  right: 0;
  visibility: hidden;
  transition: .6s;
  z-index: -2;
  font-size: 2px;
  color: transparent;
  font-weight: 400;
}

i.press {
  animation: size .4s;
  color: #e23b3b;
}

span.press {
  bottom: 120px;
  font-size: 14px;
  visibility: visible;
  animation: fade 1s;
}

@keyframes fade {
  0% {
    color: transparent;
  }
  50% {
    color: #e23b3b;
  }
  100% {
    color: transparent;
  }
}

@keyframes size {
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>