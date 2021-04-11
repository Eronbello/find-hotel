const api = {
  searchCity: async (text: string) => {
    return await fetch(
      `${process.env.VUE_APP_WEATHER_BASE_URL}/locations/v1/cities/search?apikey=9Ois2eOWJvTX71VgiS2s4AWc2ybMI9K6&q=${text}`,
      {
        method: 'GET',
      }
    )
  },
  searchWeather: async (text: string) => {
    return await fetch(
      `${process.env.VUE_APP_WEATHER_BASE_URL}/currentconditions/v1/${text}?apikey=9Ois2eOWJvTX71VgiS2s4AWc2ybMI9K6`,
      {
        method: 'GET',
      }
    )
  },
}

export default api
