<template>
  <div class="tui-search-card">
    <h3 class="tui-search-card__title">Find your perfect stay!</h3>
    <Input
      v-model="params.hotelName"
      type="text"
      placeholder="Search by hotel name"
    />
    <div class="tui-search-card__date">
      <datepicker
        v-model="params.checkInDate"
        class="tui-search-card__date-picker"
        :format="format"
        placeholder="Check-in"
      ></datepicker>
      <datepicker
        v-model="params.checkOutDate"
        :format="format"
        class="tui-search-card__date-picker"
        placeholder="Check-out"
      ></datepicker>
    </div>
    <Input
      v-model="params.adults"
      type="number"
      placeholder="Number of guests"
    />
    <a
      class="tui-search-card__action"
      @click="
        $emit('search', {
          hotelName: params.hotelName,
          adults: params.adults,
          checkInDate: formatDate(params.checkInDate),
          checkOutDate: formatDate(params.checkOutDate),
        })
      "
      >Search</a
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
  props: {
    form: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    format: 'yyyy-MM-dd',
    params: {
      hotelName: '',
      checkOutDate: '',
      checkInDate: '',
      adults: '',
    },
  }),
  mounted() {
    console.log(this.form)
    this.params = this.form
  },
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
  position: relative;
  background-color: white;
  width: 100%;
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
    cursor: pointer;
    text-decoration: none;
    color: white;
    padding: 8px;
    border-radius: 2px;
    justify-self: flex-end;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
  }
  @media screen and (max-width: $screen-tui-s) {
    padding: 20px;
    &__date {
      flex-direction: column;
    }
    &__date-picker {
      width: 100%;
      margin-top: 2px;
    }
  }
}
</style>
