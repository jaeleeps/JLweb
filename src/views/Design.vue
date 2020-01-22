<template>
  <div class="back">
    <div style="height: 150vh; width: 100vw; background-color: red;">
    </div>
  </div>
</template>

<script>
import MainCarousel from "@/components/MainCarousel";
import ProjectCard from "@/components/ProjectCard";

export default {
  components: {
    MainCarousel,
    ProjectCard
  }
};
</script>

<style scoped>
.back{
  width: 100vw;
  min-height: 100vh;
  background-color: red;
}
</style>