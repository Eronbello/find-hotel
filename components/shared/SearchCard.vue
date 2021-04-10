<template>
  <div class="tui-search-card">
    <h3 class="tui-search-card__title">Encontre sua estadia perfeita!</h3>
    <Input type="text" placeholder="Pesquise pelo nome do hotel" />
    <client-only>
      <datepicker :highlighted="highlighted"></datepicker>
    </client-only>
    <Input type="number" />
    <a class="tui-search-card__action" href="">Pesquisar</a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Input from '@/components/common/Input.vue'
import Datepicker from 'vuejs-datepicker'
export default Vue.extend({
  components: { Input, Datepicker },
  data: () => ({
    highlighted: {
      to: '2021-04-06T23:51:00.000Z',
      from: '2021-04-05T23:51:00.000Z',
    },
  }),
})
</script>
<style lang="scss" scoped>
.tui-search-card {
  padding: 40px;
  background-color: white;
  width: 100%;
  height: 350px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__title {
    font-style: normal;
    font-size: 25px;
    line-height: 1;
    color: #092a5e;
    margin-bottom: 20px;
    text-align: center;
  }
  &__action {
    background-color: #d40e14;
    text-decoration: none;
    color: white;
    padding: 8px;
    border-radius: 2px;
    justify-self: flex-end;
    text-align: center;
  }
  @media screen and (max-width: $screen-tui-s) {
    padding: 20px;
  }
}
</style>
