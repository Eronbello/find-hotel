import search from '@/@types/search'
const clientSecret = 'wiQtbkHlUBUpA9QD'
const clientId = '0Vfk5oellqSYFwPk3dhXU4bszKVyv9S0'
const grantType = 'client_credentials'
const url = 'https://test.api.amadeus.com/v1/security/oauth2/token'

const body = new URLSearchParams({
  client_id: clientId,
  client_secret: clientSecret,
  grant_type: grantType,
})

const start = async () => {
  const response = await fetch(url, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    }),
    body,
  })
  const data = await response.json()
  localStorage.setItem('token', data.access_token)
}

const api = {
  search: async ({ hotelName, adults, checkInDate, checkOutDate }: search) => {
    start()
    const data = new URLSearchParams({
      hotelName,
      adults,
      checkOutDate,
      checkInDate,
    })
    const params = data.toString().replaceAll('+', '%20')
    return await fetch(
      `https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=NYC&roomQuantity=1&radius=5&radiusUnit=KM&paymentPolicy=NONE&includeClosed=false&bestRateOnly=true&view=FULL&sort=NONE&${
        data.get('hotelName') ? params : ''
      }`,
      {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }),
      }
    )
  },
  searchById: async (id: string) => {
    start()
    const hotelId = id.toString().replace('/', '')
    return await fetch(
      `https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=${hotelId}&paymentPolicy=NONE&roomQuantity=1&view=FULL`,
      {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }),
      }
    )
  },
}

export default api
