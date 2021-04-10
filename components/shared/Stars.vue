<template>
  <ol class="tui-rating">
    <li v-for="(item, index) in rating" :key="index" class="tui-rating__star">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25.5 24.18"
        class="app-svg app-svg--stk app-svg--star"
        data-v-7378e3ba=""
      >
        <path
          d="M12.75 18.05l-7.42 5.38 2.86-8.67L.75 9.41h9.18L12.75.75l2.82 8.68h9.18l-7.44 5.34 2.86 8.67z"
          class="app-svg__path app-svg__path--stk"
          data-v-7378e3ba=""
        ></path>
        <path
          d="M12.75 18.05l-7.42 5.38 2.86-8.67L.75 9.41h9.18L12.75.75l2.82 8.68h9.18l-7.44 5.34 2.86 8.67z"
          class="app-svg__path app-svg__path--fill"
          data-v-7378e3ba=""
        ></path>
      </svg>
    </li>
  </ol>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    rating: {
      type: Number,
      default: 0,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.tui-rating {
  padding: 0;
  margin: 0;
  display: flex;
  &__star {
    display: inline-block;
    padding: 0 2px;
    svg {
      display: block;
      width: 12px;
      height: 11px;
    }
  }
}
</style>
