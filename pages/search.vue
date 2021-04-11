<template>
  <div class="tui-search-page">
    <div class="tui-container">
      <div class="tui-search-bar">
        <SearchCard />
      </div>
      <div v-if="hotels && hotels.length === 0" class="tui-hotels-loading">
        <LoadingIcon />
      </div>
      <div v-else class="tui-hotels-list">
        <template v-for="hotel in hotels">
          <HotelSearchCard
            :key="hotel.hotelId"
            :hotel="hotel"
            @selected="openDetails"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import apiService from '@/services/api'
import SearchCard from '@/components/shared/SearchCard.vue'
import HotelSearchCard from '@/components/shared/HotelSearchCard.vue'
import LoadingIcon from '@/components/shared/LoadingIcon.vue'
import search from '@/@types/search'
export default Vue.extend({
  components: { SearchCard, HotelSearchCard, LoadingIcon },
  data: () => ({
    hotels: [],
  }),
  async mounted() {
    const params = this.getParams()
    const response = await apiService.search(params)
    const data = await response.json()
    this.hotels = data.data
  },
  methods: {
    getParams(): search {
      const hotelName: string = this.$route.query.hotelName as string
      const adults: string = this.$route.query.adults as string
      const checkInDate: string = this.$route.query.checkInDate as string
      const checkOutDate: string = this.$route.query.checkOutDate as string

      return {
        hotelName: hotelName ? `Hotel ${hotelName}` : '',
        adults,
        checkOutDate,
        checkInDate,
      }
    },
    openDetails(hotel: any) {
      this.$router.push({ path: `/${hotel.hotel.hotelId}` })
    },
  },
})
</script>
<style lang="scss" scoped>
.tui-search-page {
  display: flex;
  justify-content: center;
  min-height: 90vh;
}
.tui-hotels-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}
</style>
