<template>
  <div class="arrow bounce">
    <v-icon x-large>mdi-chevron-down</v-icon>
  </div>
</template>

<style scoped>
/* @bg: #2d2d37; // Dark blue
@primary: #fd6b21; // Orange */

/* body {
  background: @bg;
} */

a {
  color: black;
  text-decoration: none;
}

.arrow {
  text-align: center;
}
.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-8px);
  }
}
</style>