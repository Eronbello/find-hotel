<template>
  <div class="tui-main-page">
    <div class="tui-container">
      <section class="tui-search">
        <div class="tui-search__title">
          <h1>O SEU QUARTO ESTÁ PRONTO</h1>
          <h2>
            Encontre resorts, hotéis, apartamentos, casas e muito mais, com o
            melhor preço. É só pesquisar o destino dos seus sonhos!
          </h2>
        </div>
        <SearchCard class="tui-search__card" />
      </section>
      <section class="tui-categories"></section>
      <section class="tui-recommended">
        <h3 class="tui-recommended__title">Estadias recomendadas</h3>
        <div class="tui-recommended__list">
          <hotel-card />
          <hotel-card />
          <hotel-card />
          <hotel-card />
          <hotel-card />
          <hotel-card />
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HotelCard from '@/components/shared/HotelCard.vue'
import SearchCard from '@/components/shared/SearchCard.vue'
export default Vue.extend({
  components: { HotelCard, SearchCard },
})
</script>

<style lang="scss" scoped>
.tui-main-page {
  display: flex;
  justify-content: center;
}
.tui-search {
  display: flex;
  margin: 0 auto;
  position: relative;
  min-height: 500px;
  max-height: 700px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  padding: 0 50px;
  background-size: cover;
  background-image: url(https://static.stay.tui.com/img/hero/home.jpg);
  opacity: 0;
  animation: fade-in-top ease 0.4s forwards;
  position: relative;
  align-items: center;
  justify-content: space-between;
  &__title {
    display: flex;
    color: white;
    flex-direction: column;
    width: 100%;
    z-index: 10;
    padding-right: 40px;
  }
  &::after {
    content: '';
    display: inline-block;
    width: 50%;
    height: 100%;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    background: transparent
      linear-gradient(-90deg, transparent, rgba(0, 0, 0, 0.8)) 0 0 no-repeat
      padding-box;
  }
  @media screen and (max-width: $screen-tui-s) {
    flex-direction: column;
    height: 350px;
    padding: 0 0;
    min-height: initial;
    max-height: initial;
    &__title {
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      display: none;
      padding: 50px;
      h1 {
        font-size: 30px;
      }
      h2 {
        font-size: 15px;
      }
    }
    &::after {
      display: none;
    }
  }
}

.tui-recommended {
  opacity: 0;
  animation: fade-in-top ease 0.4s forwards;
  animation-delay: 0.4s;
  margin-top: 20px;
  &__title {
    margin-bottom: 20px;
    color: #092a5e;
  }
  &__list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
}
</style>
