<template>
  <div
    :style="{ backgroundColor: color }"
    :class="['tui-toaster', show && 'tui-toaster--show']"
  >
    {{ message }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    show: {
      type: Boolean,
      default: false,
      required: true,
    },
    message: {
      type: String,
      default: '',
      required: true,
    },
    color: {
      type: String,
      default: '',
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.tui-toaster {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: absolute;
  z-index: 1;
  right: 0;
  top: 30px;
}

.tui-toaster--show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {
    left: 0;
    opacity: 0;
  }
  to {
    right: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    right: 0;
    opacity: 0;
  }
  to {
    right: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    right: 30px;
    opacity: 1;
  }
  to {
    right: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    right: 30px;
    opacity: 1;
  }
  to {
    right: 0;
    opacity: 0;
  }
}
</style>
