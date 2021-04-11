<template>
  <div class="tui-details-page">
    <div class="tui-container">
      <div v-if="isLoading" class="tui-details-page__loading">
        <LoadingIcon />
      </div>
      <div v-else class="tui-details-page__detail">
        <img
          class="tui-details-page__background"
          src="https://www.hotelpremiumcampinas.com.br/wp-content/uploads/2020/01/banner-home-2020.jpg"
          alt="room-detail"
        />
        <div class="tui-details-page__title">
          <h1>
            {{ hotel.hotel.name }}
            <Stars
              :rating="hotel.hotel.rating ? parseInt(hotel.hotel.rating) : 1"
            />
          </h1>
          <div v-if="weather.WeatherIcon" class="tui-details-page__weather">
            <span
              >Temperature: {{ weather.Temperature.Metric.Value }} &#8451;</span
            >
            <img
              :src="`https://developer.accuweather.com/sites/default/files/${
                weather.WeatherIcon > 9
                  ? weather.WeatherIcon
                  : '0' + weather.WeatherIcon
              }-s.png`"
              alt="weather icon"
            />
          </div>
        </div>
        <div class="tui-details-page__address">
          <h3>
            {{
              `${hotel.hotel.address.lines[0]}, ${hotel.hotel.address.postalCode}, ${hotel.hotel.address.countryCode}, ${hotel.hotel.address.cityName}`
            }}
          </h3>
        </div>
        <div class="tui-details-page__description">
          <p>
            {{
              hotel.hotel.description
                ? hotel.hotel.description.text
                : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras massa eros, pellentesque ac ligula semper, aliquet volutpat purus. Vivamus maximus ultrices elit. Suspendisse iaculis justo sit amet nulla aliquam fermentum. Quisque finibus, ipsum sed lobortis dignissim, velit enim laoreet nunc, non euismod nunc urna nec augue. Vestibulum ut enim sed elit aliquet dignissim et quis mauris. Sed tincidunt nisl sed dolor sollicitudin iaculis eu in felis. Nunc interdum feugiat metus nec tincidunt. Pellentesque rutrum malesuada velit, at venenatis metus porta quis. Aliquam a feugiat quam. Morbi sit amet tincidunt turpis.'
            }}
          </p>
        </div>
        <div class="tui-details-page__amenities">
          <ol>
            <li v-for="(amenity, index) in hotel.hotel.amenities" :key="index">
              {{ `- ${amenity}` }}
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import apiService from '@/services/api'
import apiWeatherService from '@/services/weatherApi'
import LoadingIcon from '@/components/shared/LoadingIcon.vue'
import Stars from '@/components/shared/Stars.vue'
export default Vue.extend({
  components: { LoadingIcon, Stars },
  data: () => ({
    hotel: {},
    weather: {},
    isLoading: true,
  }),
  async mounted() {
    this.isLoading = true
    const id = this.$route.path as string
    const response = await apiService.searchById(id)
    const data = await response.json()
    this.hotel = data.data
    const cityName = data.data.hotel.address.cityName
    const weatherResponse = await apiWeatherService.searchCity(
      cityName as string
    )
    const dataWeather = await weatherResponse.json()
    if (dataWeather.length > 0) {
      const responseWeatherCity = await apiWeatherService.searchWeather(
        dataWeather[0].Key as string
      )
      const dataWeatherCity = await responseWeatherCity.json()
      this.weather = dataWeatherCity[0]
    }
    this.isLoading = false
  },
})
</script>
<style lang="scss" scoped>
.tui-details-page {
  display: flex;
  justify-content: center;
  min-height: 90vh;
  &__loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90%;
  }
  &__weather {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100px;
      height: auto;
    }
  }

  &__background {
    width: 100%;
    height: auto;
  }
  &__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #092a5e;
    font-size: 15px;
    font-weight: 700;
    font-style: normal;
    font-stretch: normal;
    line-height: 39px;
    letter-spacing: 0.025em;
  }
  &__address {
    color: #092a5e;
    font-size: 12px;
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    line-height: 19px;
    letter-spacing: normal;
  }
  &__description {
    margin-top: 20px;
    color: #4c4c4c;
    font-size: 13px;
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: normal;
  }
  &__amenities {
    ol {
      counter-reset: item;
      list-style-type: none;
      padding: 0;
      display: flex;
      flex-direction: column;
      max-height: 300px;
      flex-wrap: wrap;
      padding: 20px 0;
      li {
        color: #092a5e;
        font-weight: 700;
      }
    }
  }
  @media screen and (max-width: $screen-tui-s) {
    &__title {
      flex-direction: column;
      align-items: initial;
      ol {
        margin-top: 10px;
        margin-bottom: 20px;
      }
    }
    &__amenities {
      ol {
        max-height: initial;
      }
    }
    &__weather {
      justify-content: initial;
    }
  }
}
</style>
