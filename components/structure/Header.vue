<template>
  <header class="tui-header">
    <div class="tui-container">
      <Logo />
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '@/components/Logo.vue'
export default Vue.extend({
  components: { Logo },
})
</script>

<style lang="scss" scoped>
.tui-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
}
</style>
