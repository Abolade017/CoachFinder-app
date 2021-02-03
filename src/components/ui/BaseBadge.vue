<template>
  <div>
    <span class="badge" :class="type">
      {{ text }}
    </span>
  </div>
</template>

<script>
export default {
  props: ["type", "title"],
  computed: {
    text() {
      return this.title.toUpperCase();
    }
  }
};
</script>
<style scoped>
.badge {
  background-color: #ccc;
  border-radius: 30px;
  color: #252525;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
}
.frontend {
  background-color: #3d008d;
  color: white;
}
.backend {
  background-color: #71008d;
  color: white;
}
.career {
  background-color: #8d006e;
  color: white;
}
</style>