<template>
  <div class="tui-hotel-card">
    <figure class="tui-hotel-card__figure">
      <img
        class="tui-hotel-card__image"
        src="https://www.hotelbertaso.com.br/img/site/1380/b/3205885.jpg"
        alt="hotel-name"
      />
    </figure>
    <div class="tui-hotel-card__description">
      <div class="tui-hotel-card__stars">
        <h3>Majestic Palace</h3>
        <Stars :rating="5" />
      </div>
      <div class="tui-hotel-card__place">
        <Badge message="HOTEL" />
        <span>Curitiba, Brasil</span>
      </div>
      <div class="tui-hotel-card__details">
        <span>R$ 150,00 / noite</span>
        <a href="#">Detalhes</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Badge from '@/components/shared/Badge.vue'
import Stars from '@/components/shared/Stars.vue'
export default Vue.extend({
  components: { Badge, Stars },
})
</script>
<style lang="scss" scoped>
.tui-hotel-card {
  margin-bottom: 20px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  width: 30%;
  border-radius: 5px;
  border: 1px solid rgba(76, 76, 76, 0.2);
  transition-delay: 50ms;
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
  &__figure {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    transition: all 0.25s cubic-bezier(0.5, 1.25, 1, 1);
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    background: transparent linear-gradient(180deg, #e2f3fe, #fcfaf7) 0 0
      no-repeat padding-box;
  }
  &__image {
    display: block;
    width: 100%;
    height: auto;
    transition: all 0.25s cubic-bezier(0.5, 1.25, 1, 1);
    position: absolute;
    &:hover {
      transform: scale(1.1);
    }
  }
  &__description {
    padding: 24px;
  }
  &__stars {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  &__details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    padding-top: 20px;
    a {
      background-color: #d40e14;
      text-decoration: none;
      color: white;
      padding: 8px;
      border-radius: 5px;
    }
  }
  &__place {
    margin-bottom: 20px;
  }
  @media screen and (max-width: $screen-tui-s) {
    width: 45%;
  }
  @media screen and (max-width: $screen-tui-xs) {
    width: 100%;
  }
}
</style>
