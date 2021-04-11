<template>
  <div class="tui-search-card">
    <h3 class="tui-search-card__title">Encontre sua estadia perfeita!</h3>
    <Input
      v-model="form.hotelName"
      type="text"
      placeholder="Pesquise pelo nome do hotel"
    />
    <div class="tui-search-card__date">
      <datepicker
        v-model="form.checkIn"
        class="tui-search-card__date-picker"
        :format="format"
        placeholder="CHECK-IN"
      ></datepicker>
      <datepicker
        v-model="form.checkOut"
        :format="format"
        class="tui-search-card__date-picker"
        placeholder="CHECK-OUT"
      ></datepicker>
    </div>
    <Input
      v-model="form.adults"
      type="number"
      placeholder="Quantidade de hóspedes"
    />
    <NuxtLink
      class="tui-search-card__action"
      :to="{
        path: 'search',
        query: {
          hotelName: form.hotelName,
          adults: form.adults,
          checkInDate: formatDate(form.checkIn),
          checkOutDate: formatDate(form.checkOut),
        },
      }"
      >Pesquisar</NuxtLink
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Input from '@/components/common/Input.vue'
import Datepicker from 'vuejs-datepicker'
import dateHelper from '@/helpers/date'
export default Vue.extend({
  components: { Input, Datepicker },
  data: () => ({
    format: 'yyyy-MM-dd',
    form: {
      hotelName: '',
      checkIn: '',
      checkOut: '',
      adults: '',
    },
  }),
  methods: {
    formatDate(date: Date) {
      return dateHelper(date)
    },
  },
})
</script>
<style lang="scss" scoped>
.tui-search-card {
  padding: 40px;
  background-color: white;
  width: 100%;
  z-index: 200;
  height: 350px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__date {
    display: flex;
    justify-content: space-between;
  }
  &__date-picker {
    width: 49%;
    z-index: 10;
  }
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
