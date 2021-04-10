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
  color: #092a5e;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 0 10px;
  display: inline;
}
</style>
