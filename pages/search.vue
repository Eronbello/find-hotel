<template>
  <div class="tui-search-page">
    <Toaster
      message="Please fill all the form"
      color="#d40e14"
      :show="showToaster"
    />
    <div class="tui-container">
      <div v-if="!isLoading" class="tui-search-bar">
        <SearchCard :form="form" @search="onSearch" />
      </div>
      <div v-if="isLoading" class="tui-hotels-loading">
        <LoadingIcon />
      </div>
      <div v-else class="tui-hotels-list">
        <template v-for="hotel in hotels">
          <HotelSearchCard
            v-if="existHotels"
            :key="hotel.hotelId"
            :hotel="hotel"
            @selected="openDetails"
          />
        </template>
        <h3 v-if="!existHotels" class="tui-hotels-list__not-exists">
          There are no hotels with these parameters
        </h3>
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
import Toaster from '@/components/shared/Toaster.vue'
import search from '@/@types/search'
export default Vue.extend({
  components: { SearchCard, HotelSearchCard, LoadingIcon, Toaster },
  data: () => ({
    hotels: [],
    showToaster: false,
    isLoading: true,
    form: {},
  }),
  computed: {
    existHotels() {
      return this.hotels.length > 0
    },
  },
  async mounted() {
    await (this as any).startSearch()
  },
  methods: {
    getParams(): search {
      const hotelName: string = this.$route.query.hotelName as string
      const adults: string = this.$route.query.adults as string
      const checkInDate: string = this.$route.query.checkInDate as string
      const checkOutDate: string = this.$route.query.checkOutDate as string

      this.form = { ...this.$route.query }

      return {
        hotelName: hotelName ? `Hotel ${hotelName}` : '',
        adults,
        checkOutDate,
        checkInDate,
      }
    },
    openDetails(hotel: any): void {
      this.$router.push({ path: `/${hotel.hotel.hotelId}` })
    },
    async startSearch(): Promise<void> {
      this.isLoading = true
      const params = (this as any).getParams()
      const response = await apiService.search(params)
      const data = await response.json()
      this.hotels = data.data
      this.isLoading = false
    },
    onSearch(params: any): void {
      let isValid = true
      const formData = Object.entries(params)
      formData.forEach((item) => {
        if (item[1] === '' || item[1] === 'NaN-NaN-NaN') {
          isValid = false
        }
      })
      if (!isValid) {
        this.showToaster = !this.showToaster
      } else {
        this.$router.push({ path: `/search`, query: params })
        this.isLoading = true
        setTimeout(async () => {
          await (this as any).startSearch()
        }, 1000)
      }
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
.tui-hotels-list__not-exists {
  text-align: center;
  color: #092a5e;
  margin-top: 50px;
  font-size: 2rem;
}
</style>
