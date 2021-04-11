<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/structure/Header.vue'
import Footer from '@/components/structure/Footer.vue'
export default Vue.extend({
  components: { Header, Footer },
})
</script>
<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
