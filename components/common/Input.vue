<template>
  <div class="tui-input">
    <label :for="$attrs.id">
      {{ label }}
    </label>
    <input
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
      @change="$emit('change', $event)"
    />
  </div>
</template>

<script>
export default {
  name: 'MInput',
  inheritAttrs: false,
  props: {
    value: {},
    label: {
      type: String,
      default: null,
    },
    state: {
      type: [Boolean, null],
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.tui-input {
  display: flex;
  flex-direction: column;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
  input {
    height: 48px;
    flex-direction: row;
    font-family: var(--typography--font-family);
    font-size: 20px;
    font-stretch: normal;
    font-style: normal;
    font-weight: 400;
    height: 48px;
    line-height: 23px;
    padding: 0 0 0 6px;
    border-radius: 3px;
    border-color: #00000054;
    border-style: solid;
    border-width: 1px;
    &:focus {
      /* outline: 2px solid #70cbf4; */
      outline: none;
      border-width: 0;
      box-shadow: 0 0 0 2px #048dcc;
    }
  }
}
</style>
