<template>
  <div class="tui-hotel-card" @click="$emit('selected', hotel)">
    <figure class="tui-hotel-card__figure">
      <img
        class="tui-hotel-card__image"
        src="https://www.hotelbertaso.com.br/img/site/1380/b/3205885.jpg"
        :alt="hotel.hotel.name"
      />
    </figure>
    <div class="tui-hotel-card__details">
      <div>
        <Stars
          :rating="hotel.hotel.rating ? parseInt(hotel.hotel.rating) : 1"
        />
        <h3 class="tui-hotel-card__title">{{ hotel.hotel.name }}</h3>
      </div>
      <p>
        {{
          hotel.hotel.description
            ? reduceDescription(hotel.hotel.description.text)
            : ''
        }}
      </p>
      <div class="tui-hotel-card__location">
        <span>{{
          `${hotel.hotel.address.countryCode}, ${hotel.hotel.address.cityName}`
        }}</span>
        <LocaleIcon />
      </div>
    </div>
    <div class="tui-hotel-card__book">
      <div class="tui-hotel-card__informations">
        <span>Guests: {{ hotel.offers[0].guests.adults }}</span>
        <span>{{
          hotel.offers[0].room.typeEstimated
            ? hotel.offers[0].room.typeEstimated.category
            : ''
        }}</span>
      </div>
      <div>
        <span class="tui-hotel-card__price">{{
          `${hotel.offers[0].price.currency}  ${hotel.offers[0].price.total}`
        }}</span>
        <button class="tui-hotel-card__choose">Escolha</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Stars from '@/components/shared/Stars.vue'
import LocaleIcon from '@/components/shared/LocaleIcon.vue'
export default Vue.extend({
  components: { Stars, LocaleIcon },
  props: {
    hotel: {
      type: Object,
      required: true,
    },
  },
  methods: {
    reduceDescription(description: string) {
      return `${description.substring(0, 150)}...`
    },
  },
})
</script>
<style lang="scss" scoped>
.tui-hotel-card {
  height: 250px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  cursor: pointer;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #e2e2e2;
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
  &__figure {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    position: relative;
    width: 300px;
    height: 100%;
  }
  &__image {
    display: block;
    width: 300px;
    height: 250px;
  }
  &__details {
    flex-grow: 1;
    padding: 19px 30px 16px 30px;
    color: $blue-500;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__book {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 215px;
    padding: 0 30px 0 30px;
    margin: 19px 0 16px 0;
    color: $blue-500;
    border-left: 1px solid #e2e2e2;
    justify-content: space-between;
    min-width: 215px;
    max-width: 215px;
  }
  &__price {
    font-size: 24px;
    float: right;
    margin-bottom: 10px;
    font-weight: 700;
  }
  &__choose {
    font-size: 18px;
    padding: 0 10px;
    border-radius: 2px;
    height: 38px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.16);
    outline: none;
    background: $blue-500;
    cursor: pointer;
    color: white;
    font-weight: 700;
    justify-content: center;
    letter-spacing: normal;
    border-width: 0;
    width: 100%;
  }
  &__informations {
    display: flex;
    flex-direction: column;
    font-size: 14px;
  }
  &__location {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-style: italic;
  }
  &__title {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: $screen-tui-s) {
    flex-direction: column;
    height: 100%;
    &__figure {
      width: 100%;
    }
    &__image {
      display: block;
      width: 100%;
      height: 250px;
    }
    &__book {
      width: 100%;
      min-width: initial;
      max-width: initial;
    }
    &__choose,
    &__informations {
      display: none;
    }
    &__location {
      justify-content: initial;
    }
  }
}
</style>
