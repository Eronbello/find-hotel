<template>
  <div class="tui-badge">
    <span>{{ message }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    message: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.tui-badge {
  color: $blue-500;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 2px 10px;
  font-weight: 700;
  font-size: 0.8rem;
  display: inline;
}
</style>
