import { createLocalVue, shallowMount } from '@vue/test-utils'
import Details from '@/pages/_id.vue'
import apiService from '@/services/api'
import weatherApi from '@/services/weatherApi'

describe('Details', () => {
  const localVue = createLocalVue()

  let wrapper
  const stubs = {}

  beforeEach(() => {
    apiService.searchById = () => {
      return {
        json: () => {
          const data = {
            data: {
              type: 'hotel-offers',
              hotel: {
                type: 'hotel',
                hotelId: 'YZSAO082',
                chainCode: 'YZ',
                dupeId: '700061690',
                name: 'STAYBRIDGE SUITES SAO PAULO',
                rating: '3',
                cityCode: 'SAO',
                latitude: -23.58781,
                longitude: -46.67492,
                hotelDistance: {
                  distance: 4.8,
                  distanceUnit: 'KM',
                },
                address: {
                  lines: ['RUA BANDEIRA PAULISTA', '555 CENTURY PLAZA BRASCAN'],
                  postalCode: '04532 011',
                  cityName: 'ITAIM BIBI-SAO PAOLO',
                  countryCode: 'BR',
                  stateCode: 'SP',
                },
                contact: {
                  phone: '+55 11 37066600',
                  fax: '+55 11 37066610',
                },
                description: {
                  lang: 'en',
                  text:
                    'Find the Excitement of Sao Paulo Brazil at Hotels Front Door. You will be swept away by the beauty and vibrant culture of Brazil that surrounds the Staybridge Suites Sao Paulo hotel. The nearby Faria Lima and Avenida Paulista area features the citys best entertainment and bustling commerce districts. Guests traveling on business or leisure are captivated by the stunning skyscrapers and cosmopolitan lifestyle of Sao Paulo. The hotels location is in the center of the Brascan Century Plaza complex which offers nine restaurants six movie theaters three coffee shops a bookstore cash exchange point and more. This complex is also a hub for major corporations like JP Morgan AT Kearney and KPMG. High speed wireless Internet access helps ensure that the hotels corporate guests can be productive within the comfort of a secure suite. Travel is also convenient as the domestic Congonhas Airport is just 15 minutes away. The exclusive Itaim Bibi area has something for everyone. Many of the best music theatre museum and dining offerings are found in the breathtaking metropolis of Sao Paulo. Sao Paulo and the hotels amenities delight the most discerning of guests. The outdoor pool sauna valet parking free breakfast buffet and helipad are a few of the perks carefully chosen for your comfort. This award winning hotel impresses guests with its exceptional services bestowed with a Brazilian flair. Make your plans today.',
                },
                amenities: [
                  '24_HOUR_FRONT_DESK',
                  '24_HOUR_ROOM_SERVICE',
                  'COFFEE_SHOP',
                  'EXPRESS_CHECK_OUT',
                  'ACCESSIBLE_FACILITIES',
                  'WHEELCHAIR_ACCESSIBLE_PUBLIC_AREA',
                  'HANDRAILS_BATHROOM',
                  'WHEELCHAIR_ACCESSIBLE_ELEVATORS',
                  'ACCESSIBLE_PARKING',
                  'WHEELCHAIR_ACCESSIBLE_ROOM',
                  'ICE_MACHINES',
                  'GARAGE_PARKING',
                  'JOGGING_TRACK',
                  'LAUNDRY_SERVICE',
                  'ON-SITE_PARKING',
                  'OUTDOOR_POOL',
                  'PARKING',
                  'SWIMMING_POOL',
                  'SOLARIUM',
                  'CONVENIENCE_STORE',
                  'DRY_CLEANING',
                  'PORTER/BELLBOY',
                  'FRONT_DESK',
                  'WIFI',
                  'WIRELESS_CONNECTIVITY',
                  'DVD/VIDEO_RENTAL',
                  'CHILDRENS_PLAY_AREA',
                  'HIGH_SPEED_WIRELESS',
                  'FEMA_FIRE_SAFETY_COMPLIANT',
                  'PHOTOCOPIER',
                  'PRINTER',
                  'BUSINESS_CENTER',
                  'COMPUTER_RENTAL',
                  'CONFERENCE_SUITE',
                  'CONVENTION_CENTRE',
                  'MEETING_FACILITIES',
                  'FIRE_SAFETY',
                  'EMERGENCY_BACKUP_GENERATOR',
                  'EMERGENCY_LIGHTING',
                  'FIRE_DETECTORS',
                  'GUARDED_PARKING',
                  'SPRINKLERS',
                  'SECURITY_GUARD',
                  'VIDEO_SURVEILANCE',
                  'EXTINGUISHERS',
                  'FEMA_FIRE_SAFETY_COMPLIANT',
                ],
                media: [
                  {
                    uri:
                      'http://uat.multimediarepository.testing.amadeus.com/cmr/retrieve/hotel/26BFBE6CF4DE489F9656E52F0881D600',
                    category: 'EXTERIOR',
                  },
                ],
              },
              available: true,
              offers: [
                {
                  id: 'MHZDB6GWVB',
                  checkInDate: '2021-04-11',
                  checkOutDate: '2021-04-12',
                  rateCode: '22A',
                  rateFamilyEstimated: {
                    code: 'BAR',
                    type: 'P',
                  },
                  boardType: 'BREAKFAST',
                  room: {
                    type: '*RH',
                    typeEstimated: {
                      category: 'SUITE',
                      beds: 1,
                      bedType: 'QUEEN',
                    },
                    description: {
                      text:
                        'BEST FLEXIBLE RATE\nSTANDARD ROOM SUITE WITH 38SQM 1 QUEEN BED, AC,\nTV 40",BIG WORKSPACE,HSIA. KITCHENETTE W DINING',
                      lang: 'PT',
                    },
                  },
                  guests: {
                    adults: 2,
                  },
                  price: {
                    currency: 'BRL',
                    base: '600.00',
                    total: '634.85',
                    taxes: [
                      {
                        code: 'MISCELLANEOUS',
                        pricingFrequency: 'PER_NIGHT',
                        pricingMode: 'PER_PRODUCT',
                        amount: '4.85',
                        currency: 'BRL',
                        included: false,
                      },
                      {
                        code: 'MISCELLANEOUS',
                        pricingFrequency: 'PER_NIGHT',
                        pricingMode: 'PER_PRODUCT',
                        percentage: '5.00',
                        included: false,
                      },
                    ],
                    variations: {
                      average: {
                        base: '600.00',
                      },
                      changes: [
                        {
                          startDate: '2021-04-11',
                          endDate: '2021-04-12',
                          base: '600.00',
                        },
                      ],
                    },
                  },
                  policies: {
                    guarantee: {
                      acceptedPayments: {
                        creditCards: ['AX', 'VI', 'CA', 'DC'],
                        methods: ['CREDIT_CARD'],
                      },
                    },
                    paymentType: 'guarantee',
                    cancellation: {
                      numberOfNights: 1,
                      deadline: '2021-04-09T14:36:00-03:00',
                    },
                  },
                },
              ],
              self:
                'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=YZSAO082&adults=2&paymentPolicy=NONE&roomQuantity=1&view=FULL',
            },
          }
          return data
        },
      }
    }
    weatherApi.searchCity = () => {
      return {
        json: () => {
          const data = {
            data: { id: 1, Key: '22' },
          }
          return data
        },
      }
    }
    weatherApi.searchWeather = () => {
      return {
        json: () => {
          const data = {
            data: { id: 1, Key: '22' },
          }
          return data
        },
      }
    }
    wrapper = mountWrapper(localVue, stubs)
  })

  describe('Components', () => {
    describe('when component is loaded', () => {
      it('should have a tui-details-page', () => {
        expect(wrapper.find('.tui-details-page').exists()).toBeTruthy()
      })
    })
  })
})

function mountWrapper(localVue, stubs) {
  return shallowMount(Details, {
    localVue,
    stubs,
    mocks: {
      $t: jest.fn().mockImplementation((x) => x),
      $route: {
        path: {
          adults: '2',
          checkInDate: '2021-04-15',
          checkOutDate: '2021-04-16',
          hotelName: 'a',
        },
      },
    },
  })
}
