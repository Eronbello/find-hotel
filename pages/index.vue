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
export default Vue.extend({
  components: { HotelCard, SearchCard },
  data: () => ({
    hotelList: [
      {
        type: 'hotel-offers',
        hotel: {
          type: 'hotel',
          hotelId: 'HIPARC12',
          chainCode: 'HI',
          dupeId: '700132326',
          name: 'HOLIDAY INN PARIS-NOTRE DAME123',
          rating: '3',
          cityCode: 'PAR',
          latitude: 48.85254,
          longitude: 2.34198,
          hotelDistance: {
            distance: 0.3,
            distanceUnit: 'KM',
          },
          address: {
            lines: ['4 RUE DANTON'],
            postalCode: '75006',
            cityName: 'PARIS',
            countryCode: 'FR',
          },
          contact: {
            phone: '+33 1 81690060',
            fax: '+33 1 81690061',
          },
          description: {
            lang: 'en',
            text:
              'This boutique style eco hotel is in the heart of Paris 5 minutes walk from Notre Dame Cathedral and a short stroll from the Louvre museum. Regular RER trains run to Paris Charles de Gaulle Airport and Paris Orly Airport in 30 minutes. It is a 5 minute walk to Saint Michel Notre Dame Metro station for links to company offices on Avenue de France and events at Paris Nord Villepinte Exhibition and Convention Centre. There are 3 air conditioned meeting rooms with wireless Internet which can accommodate up to 55 of your colleagues. You can round off your meeting with cocktails on the roof terrace with panoramic views of Paris. Internet is available 24 hours a day on the 2 computers in the Lobby and there is high speed Internet in all Guest rooms.',
          },
          amenities: [
            '24_HOUR_FRONT_DESK',
            '24_HOUR_ROOM_SERVICE',
            'ATM/CASH_MACHINE',
            'CONFERENCE_FACILITIES',
            'EXCHANGE_FACILITIES',
            'EXPRESS_CHECK_IN',
            'EXPRESS_CHECK_OUT',
            'ACCESSIBLE_FACILITIES',
            'WHEELCHAIR_ACCESSIBLE_PUBLIC_AREA',
            'WHEELCHAIR_ACCESSIBLE_ELEVATORS',
            'WHEELCHAIR_ACCESSIBLE_ROOM',
            'GARAGE_PARKING',
            'LAUNDRY_SERVICE',
            'RESTAURANT',
            'SAFE_DEPOSIT_BOX',
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
            'CONFERENCE_SUITE',
            'CONVENTION_CENTRE',
            'MEETING_FACILITIES',
            'FIRE_SAFETY',
            'EMERGENCY_LIGHTING',
            'FIRE_DETECTORS',
            'SPRINKLERS',
            'FIRST_AID_STAF',
            'SECURITY_GUARD',
            'VIDEO_SURVEILANCE',
            'EXTINGUISHERS',
            'FEMA_FIRE_SAFETY_COMPLIANT',
          ],
          media: [
            {
              uri:
                'http://uat.multimediarepository.testing.amadeus.com/cmr/retrieve/hotel/39A9137DCEC149B59898A0598BE2C76A',
              category: 'EXTERIOR',
            },
          ],
        },
        available: true,
        offers: [
          {
            id: 'QI5WEVQKF6',
            checkInDate: '2021-04-11',
            checkOutDate: '2021-04-12',
            rateCode: '22A',
            rateFamilyEstimated: {
              code: 'BAR',
              type: 'P',
            },
            room: {
              type: '*RH',
              typeEstimated: {
                category: 'STANDARD_ROOM',
              },
              description: {
                text:
                  'BEST FLEXIBLE RATE\nSTANDARD ROOM NONSMOKING RELAX IN A\nCONTEMPORARY DESIGNED ROOM. WE WILL DO OUR BEST',
              },
            },
            guests: {
              adults: 2,
            },
            price: {
              currency: 'EUR',
              base: '219.00',
              total: '224.76',
              variations: {
                average: {
                  base: '219.00',
                },
                changes: [
                  {
                    startDate: '2021-04-11',
                    endDate: '2021-04-12',
                    base: '219.00',
                  },
                ],
              },
            },
            policies: {
              holdTime: {
                deadline: '2021-04-11T16:00:00',
              },
              guarantee: {
                acceptedPayments: {
                  creditCards: ['AX', 'VI', 'CA'],
                  methods: ['CREDIT_CARD'],
                },
              },
              paymentType: 'guarantee',
              cancellation: {
                numberOfNights: 1,
                deadline: '2021-04-11T16:00:00+02:00',
              },
            },
          },
        ],
        self:
          'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=HIPARC12&adults=2&paymentPolicy=NONE&roomQuantity=1&view=FULL',
      },
      {
        type: 'hotel-offers',
        hotel: {
          type: 'hotel',
          hotelId: 'XKPAR321',
          chainCode: 'XK',
          dupeId: '501107986',
          name: 'The Demo Hotel',
          rating: '2',
          cityCode: 'PAR',
          latitude: 48.85801,
          longitude: 2.34661,
          hotelDistance: {
            distance: 0.4,
            distanceUnit: 'KM',
          },
          address: {
            lines: ['18 avenue Victoria'],
            postalCode: '75001',
            cityName: 'Paris',
            countryCode: 'FR',
          },
          contact: {
            phone: '+33 4 97042801',
            fax: '+33 4 92943104',
            email: 'resa@theparishotel.com',
          },
          amenities: ['MEETING_ROOMS', 'PARKING', 'INTERNET-HIGH_SPEED'],
        },
        available: true,
        offers: [
          {
            id: 'V93OOYZE77',
            checkInDate: '2021-04-11',
            checkOutDate: '2021-04-12',
            rateCode: 'ORQ',
            commission: {
              amount: '0',
              percentage: '0',
            },
            room: {
              type: 'C1D',
              typeEstimated: {
                category: 'STANDARD_ROOM',
                beds: 1,
                bedType: 'DOUBLE',
              },
              description: {
                text: 'Double room',
              },
            },
            guests: {
              adults: 2,
            },
            price: {
              currency: 'EUR',
              base: '120.00',
              total: '130.00',
              variations: {
                changes: [
                  {
                    startDate: '2021-04-11',
                    endDate: '2021-04-12',
                    base: '120.00',
                  },
                ],
              },
            },
            policies: {
              holdTime: {
                deadline: '2021-04-11T18:00:00',
              },
              guarantee: {
                acceptedPayments: {
                  creditCards: ['AX', 'CA', 'DC', 'JC', 'VI'],
                  methods: ['TRAVEL_AGENT_ID', 'CORPORATE_ID', 'CREDIT_CARD'],
                },
              },
              paymentType: 'guarantee',
            },
          },
        ],
        self:
          'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=XKPAR321&adults=2&paymentPolicy=NONE&roomQuantity=1&view=FULL',
      },
      {
        type: 'hotel-offers',
        hotel: {
          type: 'hotel',
          hotelId: 'RTPARSOR',
          chainCode: 'RT',
          dupeId: '700043120',
          name: 'Hotel de Test',
          rating: '5',
          cityCode: 'PAR',
          latitude: 48.84917,
          longitude: 2.34301,
          hotelDistance: {
            distance: 0.6,
            distanceUnit: 'KM',
          },
          address: {
            lines: ['14 RUE DE LA SORBONNE'],
            postalCode: '75005',
            cityName: 'PARIS',
            countryCode: 'FR',
          },
          contact: {
            phone: '0810515253',
            fax: '0810515254',
            email: 'Papa.Noel@free.fr',
          },
          description: {
            lang: 'en',
            text:
              'Voici une description normale de notre hotel. Il est situe dans une foret, dispose d une piscine chauffee et de chambres toutes tres spacieuses et calmes',
          },
          amenities: [
            'ELEVATOR',
            '24_HOUR_FRONT_DESK',
            '24_HOUR_ROOM_SERVICE',
            'CONNECTING_ROOMS',
            'AIRLINE_DESK',
            'ATM/CASH_MACHINE',
            'BABY-SITTING',
            'PHOTOCOPIER',
            'PRINTER',
            'AUDIO-VISUAL_EQUIPMENT',
            'WHITE/BLACKBOARD',
            'BUSINESS_CENTER',
            'CELLULAR_PHONE_RENTAL',
            'COMPUTER_RENTAL',
            'EXECUTIVE_DESK',
            'LCD/PROJECTOR',
            'MEETING_ROOMS',
            'OVERHEAD_PROJECTOR',
            'SECRETARIAL_SERVICES',
            'CONFERENCE_SUITE',
            'CONVENTION_CENTRE',
            'MEETING_FACILITIES',
            'FIRE_SAFETY',
            'EMERGENCY_BACKUP_GENERATOR',
            'EMERGENCY_LIGHTING',
            'FIRE_DETECTORS',
            'GUARDED_PARKING',
            'RESTRICTED_PUBLIC_ACCESS',
            'EXTERIOR_ROOM_ENTRY',
            'INTERIOR_ROOM_ENTRY',
            'SMOKE_DETECTOR',
            'ROOMS_WITH_BALCONIES',
            'SPRINKLERS',
            'FIRST_AID_STAF',
            'SECURITY_GUARD',
            'VIDEO_SURVEILANCE',
            'EXTINGUISHERS',
            'FEMA_FIRE_SAFETY_COMPLIANT',
            'FIRE_SAFETY_NOT_STANDARD',
            'WHEELCHAIR_ACCESSIBLE_WASHBASIN',
            'DISABLED_FACILITIES',
            'WHEELCHAIR_ACCESSIBLE_LIGHT_SWITCH',
            'WHEELCHAIR_ACCESSIBLE_PUBLIC_AREA',
            'SERVICE_DOGS_ALLOWED',
            'DISABLED_ACCESSIBLE_TOILETS',
            'HANDRAILS_BATHROOM',
            'ADAPTED_PHONES',
            'WHEELCHAIR_ACCESSIBLE_ELEVATORS',
            'TV_SUBTITLES/CAPTION',
            'ACCESSIBLE_PARKING',
            'EMERGENCY_CORD/BUTTON_BATHROOM',
            'EMERGENCY_PLAN_FOR_DISABLED',
            'HEARING_INDUCTION_LOOPS',
            'BRAILLE/LARGE_PRINT_MENU',
            'DISABLED_TRAINED_STAFF',
            'VIBRATING_PILLOWS_AVAILABLE',
            'ACCESSIBLE_BATH_CONTROLS',
            'ACCESSIBLE_BATHS',
            'BRAILLE/LARGE_PRINT_LITERATURE',
            'ADAPT_ROOM_DOORS',
            'WHEELCHAIR_ACCESSIBLE_ROOM',
            'SPECIAL_NEEDS_MENU',
            'WIDE_ENTRANCE',
            'WIDE_CORRIDORS',
            'WIDE_RESTAURANT_ENTRANCE',
            'AIR_CONDITIONING',
            'ALARM_CLOCK',
            'BABY_LISTENING_DEVICE',
            'BATH',
            'BIDET',
            'CABLE_TELEVISION',
            'CRIBS_AVAILABLE',
            'BEACH',
            'BOATING',
            'BOWLING',
            'FISHING',
            'GOLF',
            'GOLF',
            'FITNESS_CENTER',
          ],
        },
        available: true,
        offers: [
          {
            id: '5NF1K7GPQV',
            checkInDate: '2021-04-11',
            checkOutDate: '2021-04-12',
            rateCode: 'RDI',
            rateFamilyEstimated: {
              code: 'RAC',
              type: 'P',
            },
            commission: {
              amount: '0',
              percentage: '0',
            },
            room: {
              type: 'B1D',
              typeEstimated: {
                category: 'STANDARD_ROOM',
                beds: 1,
                bedType: 'DOUBLE',
              },
              description: {
                text: 'Rack rate-Room only\nStandard Room',
              },
            },
            guests: {
              adults: 2,
            },
            price: {
              currency: 'EUR',
              total: '310.00',
              variations: {
                average: {
                  base: '310.00',
                },
                changes: [
                  {
                    startDate: '2021-04-11',
                    endDate: '2021-04-12',
                    total: '310.00',
                  },
                ],
              },
            },
            policies: {
              holdTime: {
                deadline: '2021-04-11T18:00:00',
              },
              guarantee: {
                acceptedPayments: {
                  creditCards: ['AX', 'BF', 'CA', 'DC', 'EC', 'IK', 'JC', 'VI'],
                  methods: ['TRAVEL_AGENT_ID', 'CREDIT_CARD'],
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
          'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=RTPARSOR&adults=2&paymentPolicy=NONE&roomQuantity=1&view=FULL',
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
  }),
  methods: {
    openDetails(hotel: any) {
      this.$router.push({ path: `/${hotel.hotel.hotelId}` })
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
