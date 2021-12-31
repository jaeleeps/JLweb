<template>
<div>
  <p>
      <v-icon>mdi-home</v-icon>
  </p>
</div>
</template>

<style scoped>
div {
    width: 100vw;
    overflow: hidden;
}

p {
  animation-duration: 1.5s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: reverse;
}

@keyframes slidein {
  from {
    margin-left: 90%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
</style>
