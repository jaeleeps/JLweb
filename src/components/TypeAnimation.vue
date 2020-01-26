<template>
  <p class="demo">
    <span class="demo-item">
      <span class="demo-item_inner">Fullstack developer</span>
    </span>
    <span class="demo-item">
      <span class="demo-item_inner">Software Engineer</span>
    </span>
    <span class="demo-item">
      <span class="demo-item_inner">Data Scientist</span>
    </span>
  </p>
</template>

<style scoped>
.demo {
  margin-top: -10px;
  margin-bottom: -40px;
  height: 80px;
  display: block;
  overflow: hidden;
}
.demo-item {
  width: 100vw;
  height: 80px;
  display: inline;
  float: left;
  clear: left;
}

.demo {
  overflow: hidden;
  /* background-color: #2a2a28; */
  color: #2a2a28;
}

.demo-item {
  position: relative;
  font-size: 0.75em;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 100;
  padding-top: 0.75em;
  animation: animatetotop 18s steps(3) infinite;
}

.demo-item_inner,
.demo-item-overlay {
  display: inline-block;
}

.demo-item_inner {
  position: relative;
  line-height: 1;
}

.demo-item_inner:after {
  content: "";
  position: absolute;
  top: -1px;
  right: 0;
  bottom: -2px;
  left: 0;
  border-left: 1px solid #fff;
  background-color: #d2b49b;
  animation: animatetoright 3s steps(20) infinite alternate;
}

@keyframes animatetoright {
  0% {
    left: 0;
    margin-right: auto;
  }
  100% {
    left: 100%;
    margin-left: 0.6em;
    margin-right: -0.6em;
  }
}

@keyframes animatetotop {
  0% {
    top: 0;
  }
  100% {
    top: -240px;
  }
}
</style>