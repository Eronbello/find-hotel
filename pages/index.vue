<template>
  <div class="tui-main-page">
    <Toaster
      message="Please fill all the form"
      color="#d40e14"
      :show="showToaster"
    />
    <div class="tui-container">
      <section class="tui-search">
        <div class="tui-search__title">
          <h1>YOUR ROOM IS READY</h1>
          <h2>
            Find resorts, hotels, apartments, houses and more, with best price.
            Just search for your dream destination!
          </h2>
        </div>
        <SearchCard :form="form" class="tui-search__card" @search="onSearch" />
      </section>
      <section class="tui-categories"></section>
      <section class="tui-recommended">
        <h3 class="tui-recommended__title">Recommended stays</h3>
        <div class="tui-recommended__list">
          <template v-for="(hotel, index) in hotelList">
            <hotel-card :key="index" :hotel="hotel" @selected="openDetails" />
          </template>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HotelCard from '@/components/shared/HotelCard.vue'
import SearchCard from '@/components/shared/SearchCard.vue'
import Toaster from '@/components/shared/Toaster.vue'
export default Vue.extend({
  components: { HotelCard, SearchCard, Toaster },
  data: () => ({
    hotelList: [
      {
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
      {
        type: 'hotel-offers',
        hotel: {
          type: 'hotel',
          hotelId: 'HILISECB',
          chainCode: 'HI',
          dupeId: '700008208',
          name: 'HOLIDAY INN',
          rating: '3',
          cityCode: 'LIS',
          latitude: 38.738,
          longitude: -9.14118,
          hotelDistance: {
            distance: 2.7,
            distanceUnit: 'KM',
          },
          address: {
            lines: ['AV ANTONIO JOSE DE ALMEIDA 28'],
            postalCode: '1000 044',
            cityName: 'LISBON',
            countryCode: 'PT',
          },
          contact: {
            phone: '+351 21 0044000',
            fax: '+351 21 7936672',
          },
          description: {
            lang: 'en',
            text:
              'Relax with city views from the rooftop pool at the Central Holiday Inn Lisbon hotel 500 metres from Alameda Metro Station.       A modern hotel in the bustling City Centre Holiday Inn Lisbon is just 15 minutes from Lisbon Airport by public shuttle bus. If you are arriving by car you will appreciate easy access from the A2 highway and ample parking at the hotel. Enjoy a warm welcome on arrival in our marbled lobby before working out in the mini gym or taking in far reaching views across Lisbon from the sunny terrace and our open air rooftop pool.       Make the most of our 24 hour business centre and 7 air conditioned meeting rooms for up to 400 delegates. Close to the citys banking district Holiday Inn Lisbon is also conveniently located opposite Instituto Superior Tcnico and just a few Metro stops from the Fil Trade Fair.       Speed around Lisbon easily from nearby Alameda Saldanha and Campo Pequeno Metro Stations. We are just 2 stops from Museu Calouste Gulbenkians world class artworks and the green spaces of Parque Eduardo Vii. Moorish St Georges Castle set above the winding lanes of Alfama is 4km from the hotel. You can check email using wireless internet throughout the Holiday Inn Lisbon hotel. Our laid back Vasco Da Gama Restaurant has an American buffet breakfast and market fresh Portuguese fare. Round off your day with Drinks in the sociable Almirante bar.',
          },
          amenities: [
            '24_HOUR_FRONT_DESK',
            '24_HOUR_ROOM_SERVICE',
            'CONFERENCE_FACILITIES',
            'EXCHANGE_FACILITIES',
            'DOCTOR_ON_CALL',
            'EXECUTIVE_FLOOR',
            'GYM',
            'EXPRESS_CHECK_IN',
            'EXPRESS_CHECK_OUT',
            'ACCESSIBLE_FACILITIES',
            'WHEELCHAIR_ACCESSIBLE_PUBLIC_AREA',
            'HANDRAILS_BATHROOM',
            'ACCESSIBLE_PARKING',
            'WHEELCHAIR_ACCESSIBLE_ROOM',
            'GARAGE_PARKING',
            'JOGGING_TRACK',
            'LAUNDRY_SERVICE',
            'ON-SITE_PARKING',
            'OUTDOOR_POOL',
            'PARKING',
            'SWIMMING_POOL',
            'SAFE_DEPOSIT_BOX',
            'TRANSLATION_SERVICES',
            'DRY_CLEANING',
            'FRONT_DESK',
            'WIRELESS_CONNECTIVITY',
            'HIGH_SPEED_WIRELESS',
            'FEMA_FIRE_SAFETY_COMPLIANT',
            'PHOTOCOPIER',
            'PRINTER',
            'AUDIO-VISUAL_EQUIPMENT',
            'BUSINESS_CENTER',
            'COMPUTER_RENTAL',
            'LCD/PROJECTOR',
            'OVERHEAD_PROJECTOR',
            'CONFERENCE_SUITE',
            'CONVENTION_CENTRE',
            'MEETING_FACILITIES',
            'FIRE_SAFETY',
            'EMERGENCY_BACKUP_GENERATOR',
            'EMERGENCY_LIGHTING',
            'FIRE_DETECTORS',
            'GUARDED_PARKING',
            'EXTINGUISHERS',
            'FEMA_FIRE_SAFETY_COMPLIANT',
            'BOATING',
            'FISHING',
            'FITNESS_CENTER',
            'SCUBA_DIVING',
          ],
          media: [
            {
              uri:
                'http://uat.multimediarepository.testing.amadeus.com/cmr/retrieve/hotel/5F12C223F73D406A90CDCCF303D0B4C3',
              category: 'EXTERIOR',
            },
          ],
        },
        available: true,
        offers: [
          {
            id: 'P5HRR8WJA8',
            checkInDate: '2021-04-15',
            checkOutDate: '2021-04-16',
            rateCode: '86V',
            rateFamilyEstimated: {
              code: 'PRO',
              type: 'P',
            },
            boardType: 'ROOM_ONLY',
            room: {
              type: '*RH',
              typeEstimated: {
                category: 'COMFORT_ROOM',
                beds: 2,
                bedType: 'DOUBLE',
              },
              description: {
                text:
                  'BOOK NOW, PAY LATER\nSTANDARD ROOM Comfortable cosy room (double bed\n2mx1,5m/2 double beds 2mx1.35m). Wi-Fi, air',
                lang: 'PT',
              },
            },
            guests: {
              adults: 2,
            },
            price: {
              currency: 'EUR',
              base: '80.50',
              total: '84.50',
              taxes: [
                {
                  code: 'MISCELLANEOUS',
                  percentage: '6.00',
                  included: true,
                },
                {
                  code: 'SERVICE_CHARGE',
                  pricingFrequency: 'PER_NIGHT',
                  pricingMode: 'PER_OCCUPANT',
                  amount: '2.00',
                  currency: 'EUR',
                  included: false,
                },
              ],
              variations: {
                average: {
                  base: '80.50',
                },
                changes: [
                  {
                    startDate: '2021-04-15',
                    endDate: '2021-04-16',
                    base: '80.50',
                  },
                ],
              },
            },
            policies: {
              guarantee: {
                acceptedPayments: {
                  creditCards: ['AX', 'VI', 'CA'],
                  methods: ['CREDIT_CARD'],
                },
              },
              paymentType: 'guarantee',
              cancellation: {
                numberOfNights: 1,
                deadline: '2021-04-14T16:00:00+01:00',
              },
            },
          },
        ],
        self:
          'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=HILISECB&adults=2&checkInDate=2021-04-15&checkOutDate=2021-04-16&paymentPolicy=NONE&roomQuantity=1&view=FULL',
      },
      {
        type: 'hotel-offers',
        hotel: {
          type: 'hotel',
          hotelId: 'HSBCNAGY',
          chainCode: 'HS',
          dupeId: '700053954',
          name: 'Cataluña',
          rating: '2',
          cityCode: 'BCN',
          latitude: 41.38548,
          longitude: 2.1718,
          hotelDistance: {
            distance: 0.2,
            distanceUnit: 'KM',
          },
          address: {
            lines: ['SANTA ANNA, 24'],
            postalCode: '8002',
            cityName: 'BARCELONA',
            countryCode: 'ES',
          },
          contact: {
            phone: '(34) 933019150',
            fax: '(34) 933189403',
            email: 'hcatalunya@hotelcatalunya.net',
          },
          description: {
            lang: 'en',
            text:
              'The hotel Cataluna in Barcelona offers its guests 40 rooms, all renovated in 2006. The rooms feature bath/toilet, satellite TV, Wi-Fi access and air-conditioning. A fax and copy service is available for the guests at the reception.',
          },
          amenities: [
            '24_HOUR_FRONT_DESK',
            'MULTILINGUAL_STAFF',
            'ELEVATOR',
            'INTERNET_SERVICES',
            'SAFE_DEPOSIT_BOX',
            'VENDING_MACHINES',
            'WIRELESS_CONNECTIVITY',
            'DOCTOR_ON_CALL',
            'COFFEE_SHOP',
            'CAR_RENTAL',
            'EXPRESS_CHECK_OUT',
            'EXPRESS_CHECK_IN',
            'CAR_RENTAL',
            'TOUR_DESK',
            'LAUNDRY_SERVICE',
            'ATM/CASH_MACHINE',
            'BEACH',
            'WATER_SPORTS',
          ],
          media: [
            {
              uri:
                'http://uat.multimediarepository.testing.amadeus.com/cmr/retrieve/hotel/C6DE359F99B249B0B4A6F197D6235765',
              category: 'EXTERIOR',
            },
          ],
        },
        available: true,
        offers: [
          {
            id: 'C8B3Z7BTHM',
            checkInDate: '2021-04-11',
            checkOutDate: '2021-04-12',
            rateCode: 'RAC',
            commission: {
              percentage: '4.00',
            },
            room: {
              type: 'ROH',
              typeEstimated: {
                category: 'STANDARD_ROOM',
              },
              description: {
                text:
                  'TradeFair-Rate\nStandard room A standard room consists of a room with shower-toilet or bathtub-toilet.',
              },
            },
            guests: {
              adults: 2,
            },
            price: {
              currency: 'EUR',
              total: '95.00',
              variations: {
                average: {
                  total: '95.00',
                },
                changes: [
                  {
                    startDate: '2021-04-11',
                    endDate: '2021-04-12',
                    total: '95.00',
                  },
                ],
              },
            },
            policies: {
              guarantee: {
                acceptedPayments: {
                  creditCards: ['DC', 'DN', 'VI', 'MC', 'CA', 'AX'],
                  methods: ['CREDIT_CARD'],
                },
              },
              paymentType: 'guarantee',
              cancellation: {
                numberOfNights: 1,
                deadline: '2021-04-09T22:59:00+02:00',
              },
            },
          },
        ],
        self:
          'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=HSBCNAGY&adults=2&paymentPolicy=NONE&roomQuantity=1&view=FULL',
      },
      {
        type: 'hotel-offers',
        hotel: {
          type: 'hotel',
          hotelId: 'RTPARNOV',
          chainCode: 'RT',
          dupeId: '700010549',
          name: 'Novotel Paris les Halles',
          rating: '4',
          cityCode: 'PAR',
          latitude: 48.86053,
          longitude: 2.34653,
          hotelDistance: {
            distance: 0.7,
            distanceUnit: 'KM',
          },
          address: {
            lines: ['8 PLACE MARGUERITE DE NAVARRE'],
            postalCode: '75001',
            cityName: 'PARIS',
            countryCode: 'FR',
          },
          contact: {
            phone: '33/1/42213131',
            fax: '33/1/40260579',
            email: 'H0785@accor.com',
          },
          description: {
            lang: 'pt',
            text:
              'O hotel Novotel Paris les Halles de 4 estrelas está localizado no centro histórico de Paris. Situa-se perto de 5 linhas de metro e 3 linhas de RER, bem como de várias atrações turísticas como o Louvre, Notre Dame, a zona de Marais, a torre Eiffel e a Disneyland® Paris. O hotel Novotel Paris les Halles inclui quartos com A/C, WIFI grátis, restaurante, pátio, bar, sala de fitness e 8 salas de reuniões. É ideal para férias a dois, viagens em família ou em viagens de negócios.',
          },
          amenities: [
            'ELEVATOR',
            'ROOM_SERVICE',
            'PARKING',
            'INTERNET_SERVICES',
            '220_AC',
            'PETS_ALLOWED',
            'ACCESSIBLE_BATHS',
            'DISABLED_FACILITIES',
            'TRANSLATION_SERVICES',
            'WIRELESS_CONNECTIVITY',
            'KIDS_WELCOME',
            'EXCHANGE_FACILITIES',
            'LOUNGE',
            'DOCTOR_ON_CALL',
            'CHILDRENS_PLAY_AREA',
            '24_HOUR_FRONT_DESK',
            'PORTER/BELLBOY',
            'ICE_MACHINES',
            'SMOKE_DETECTOR',
            'FIRE_SAFETY',
            'EMERGENCY_BACKUP_GENERATOR',
            'FIRE_DETECTORS',
            'EMERGENCY_LIGHTING',
            'GARAGE_PARKING',
            'BABY-SITTING',
            'MULTILINGUAL_STAFF',
            'RESTAURANT',
            'PHOTOCOPIER',
            'MEETING_FACILITIES',
            'COMPUTER_RENTAL',
            'MEETING_ROOMS',
            'BUSINESS_CENTER',
            'AUDIO-VISUAL_EQUIPMENT',
            'HIGH_SPEED_INTERNET_IN_ROOM',
            'BATH',
            'CRIBS_AVAILABLE',
            'ALARM_CLOCK',
            'SHOWER',
            'WAKEUP_SERVICE',
            'WI-FI_IN_ROOM',
            'DIRECT_DIAL_PHONE',
            'HAIR_DRYER',
            'CABLE_TELEVISION',
            'TELEVISION',
            'SATELLITE_TV',
            'AIR_CONDITIONING',
            'SAFE',
            'NON_SMOKING_ROOMS',
          ],
          media: [
            {
              uri:
                'http://uat.multimediarepository.testing.amadeus.com/cmr/retrieve/hotel/BA4D02DA97504F1CA3AE1D7916F1CB8E',
              category: 'EXTERIOR',
            },
          ],
        },
        available: true,
        offers: [
          {
            id: '0YOOF3NL5T',
            checkInDate: '2021-04-11',
            checkOutDate: '2021-04-12',
            rateCode: 'RA1',
            rateFamilyEstimated: {
              code: 'BAR',
              type: 'P',
            },
            commission: {
              amount: '0',
              percentage: '0',
            },
            room: {
              type: 'S1K',
              typeEstimated: {
                category: 'SUITE',
                beds: 1,
                bedType: 'QUEEN',
              },
              description: {
                text:
                  'FLEXIBLE RATE-Room only\nSuperior Suite with one queen size bed and sofa',
              },
            },
            guests: {
              adults: 2,
            },
            price: {
              currency: 'EUR',
              total: '335.00',
              variations: {
                average: {
                  base: '335.00',
                },
                changes: [
                  {
                    startDate: '2021-04-11',
                    endDate: '2021-04-12',
                    total: '335.00',
                  },
                ],
              },
            },
            policies: {
              guarantee: {
                acceptedPayments: {
                  creditCards: ['AX', 'CA', 'DC', 'EC', 'IK', 'JC', 'VI'],
                  methods: ['CREDIT_CARD'],
                },
              },
              paymentType: 'guarantee',
              cancellation: {
                deadline: '2021-04-10T00:00:00+02:00',
              },
            },
          },
        ],
        self:
          'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=RTPARNOV&adults=2&paymentPolicy=NONE&roomQuantity=1&view=FULL',
      },
      {
        type: 'hotel-offers',
        hotel: {
          type: 'hotel',
          hotelId: 'BRPARVDB',
          chainCode: 'BR',
          dupeId: '700035209',
          name: 'RENAISSANCE PARIS VENDOME',
          rating: '4',
          cityCode: 'PAR',
          latitude: 48.86195,
          longitude: 2.33592,
          hotelDistance: {
            distance: 1.1,
            distanceUnit: 'KM',
          },
          address: {
            lines: ['4 RUE DE MONT THABOR'],
            postalCode: '75001',
            cityName: 'PARIS',
            countryCode: 'FR',
          },
          contact: {
            phone: '33-1-40202000',
            fax: '33-1-40202001',
          },
          amenities: [
            'BUSINESS_CENTER',
            'MEETING_ROOMS',
            'RESTAURANT',
            'DISABLED_FACILITIES',
            'DISABLED_ACCESSIBLE_TOILETS',
            'SERVICE_DOGS_ALLOWED',
            'HANDRAILS_BATHROOM',
            'BABY-SITTING',
            'ELEVATOR',
            'EXCHANGE_FACILITIES',
            'WIFI',
            'LAUNDRY_SERVICE',
            'SAUNA',
            'SPA',
            'VALET_PARKING',
            'SWIMMING_POOL',
            'AIR_CONDITIONING',
            'HAIR_DRYER',
            'MINIBAR',
            'MOVIE_CHANNELS',
            'NON_SMOKING_ROOMS',
            'DIRECT_DIAL_PHONE',
            'ROOM_SERVICE',
            'TELEVISION',
            'SAFE_DEPOSIT_BOX',
            'FITNESS_CENTER',
          ],
          media: [
            {
              uri:
                'http://uat.multimediarepository.testing.amadeus.com/cmr/retrieve/hotel/8C0BFC3265C146DCA4765CAB16755EF4',
              category: 'EXTERIOR',
            },
          ],
        },
        available: true,
        offers: [
          {
            id: 'LKB7C7O4TA',
            checkInDate: '2021-04-11',
            checkOutDate: '2021-04-12',
            rateCode: 'RAC',
            rateFamilyEstimated: {
              code: 'BAR',
              type: 'P',
            },
            room: {
              type: 'EUP',
              typeEstimated: {
                beds: 1,
                bedType: 'QUEEN',
              },
              description: {
                text:
                  'Welcome Back, 20 percent off Flexible Rate, see Rate Rules\nLa Petite, 1 Queen, Mini fridge, 18sqm/194sqft,\n Wireless internet, for a fee, Coffee/tea maker',
              },
            },
            guests: {
              adults: 2,
            },
            price: {
              currency: 'EUR',
              base: '367.00',
              total: '374.50',
              variations: {
                average: {
                  base: '367.00',
                },
                changes: [
                  {
                    startDate: '2021-04-11',
                    endDate: '2021-04-12',
                    base: '367.00',
                  },
                ],
              },
            },
            policies: {
              paymentType: 'guarantee',
              cancellation: {
                deadline: '2021-04-10T23:59:00+02:00',
              },
            },
          },
        ],
        self:
          'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=BRPARVDB&adults=2&paymentPolicy=NONE&roomQuantity=1&view=FULL',
      },
      {
        type: 'hotel-offers',
        hotel: {
          type: 'hotel',
          hotelId: 'BRPARVDB',
          chainCode: 'BR',
          dupeId: '700035209',
          name: 'RENAISSANCE PARIS VENDOME',
          rating: '4',
          cityCode: 'PAR',
          latitude: 48.86195,
          longitude: 2.33592,
          hotelDistance: {
            distance: 1.1,
            distanceUnit: 'KM',
          },
          address: {
            lines: ['4 RUE DE MONT THABOR'],
            postalCode: '75001',
            cityName: 'PARIS',
            countryCode: 'FR',
          },
          contact: {
            phone: '33-1-40202000',
            fax: '33-1-40202001',
          },
          amenities: [
            'BUSINESS_CENTER',
            'MEETING_ROOMS',
            'RESTAURANT',
            'DISABLED_FACILITIES',
            'DISABLED_ACCESSIBLE_TOILETS',
            'SERVICE_DOGS_ALLOWED',
            'HANDRAILS_BATHROOM',
            'BABY-SITTING',
            'ELEVATOR',
            'EXCHANGE_FACILITIES',
            'WIFI',
            'LAUNDRY_SERVICE',
            'SAUNA',
            'SPA',
            'VALET_PARKING',
            'SWIMMING_POOL',
            'AIR_CONDITIONING',
            'HAIR_DRYER',
            'MINIBAR',
            'MOVIE_CHANNELS',
            'NON_SMOKING_ROOMS',
            'DIRECT_DIAL_PHONE',
            'ROOM_SERVICE',
            'TELEVISION',
            'SAFE_DEPOSIT_BOX',
            'FITNESS_CENTER',
          ],
          media: [
            {
              uri:
                'http://uat.multimediarepository.testing.amadeus.com/cmr/retrieve/hotel/8C0BFC3265C146DCA4765CAB16755EF4',
              category: 'EXTERIOR',
            },
          ],
        },
        available: true,
        offers: [
          {
            id: 'LKB7C7O4TA',
            checkInDate: '2021-04-11',
            checkOutDate: '2021-04-12',
            rateCode: 'RAC',
            rateFamilyEstimated: {
              code: 'BAR',
              type: 'P',
            },
            room: {
              type: 'EUP',
              typeEstimated: {
                beds: 1,
                bedType: 'QUEEN',
              },
              description: {
                text:
                  'Welcome Back, 20 percent off Flexible Rate, see Rate Rules\nLa Petite, 1 Queen, Mini fridge, 18sqm/194sqft,\n Wireless internet, for a fee, Coffee/tea maker',
              },
            },
            guests: {
              adults: 2,
            },
            price: {
              currency: 'EUR',
              base: '367.00',
              total: '374.50',
              variations: {
                average: {
                  base: '367.00',
                },
                changes: [
                  {
                    startDate: '2021-04-11',
                    endDate: '2021-04-12',
                    base: '367.00',
                  },
                ],
              },
            },
            policies: {
              paymentType: 'guarantee',
              cancellation: {
                deadline: '2021-04-10T23:59:00+02:00',
              },
            },
          },
        ],
        self:
          'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=BRPARVDB&adults=2&paymentPolicy=NONE&roomQuantity=1&view=FULL',
      },
    ],
    showToaster: false,
    form: {
      hotelName: '',
      checkIn: '',
      checkOut: '',
      adults: '',
    },
  }),
  methods: {
    openDetails(hotel: any) {
      this.$router.push({ path: `/${hotel.hotel.hotelId}` })
    },
    onSearch(params: any) {
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
      }
    },
  },
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
    font-weight: 400;
    h1 {
      font-size: 3rem;
      margin-bottom: 20px;
    }
    h2 {
      font-size: 1rem;
    }
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
  margin-top: 50px;
  position: relative;
  z-index: 0;
  &__title {
    margin-bottom: 50px;
    font-size: 1.5rem;
    color: #092a5e;
    text-align: center;
  }
  &__list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
}
</style>
