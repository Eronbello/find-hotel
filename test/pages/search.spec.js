import { createLocalVue, shallowMount } from '@vue/test-utils'
import Search from '@/pages/search.vue'
import apiService from '@/services/api'

describe('Search', () => {
  const localVue = createLocalVue()

  let wrapper
  const stubs = {}
  const $router = {
    query: {
      adults: '2',
      checkInDate: '2021-04-15',
      checkOutDate: '2021-04-16',
      hotelName: 'a',
    },
    push: jest.fn(),
  }

  beforeEach(() => {
    apiService.search = () => {
      return {
        json: () => {
          const data = {
            data: { id: 1 },
          }
          return data
        },
      }
    }
    wrapper = mountWrapper(localVue, stubs, $router)
  })

  describe('Components', () => {
    describe('when component is loaded', () => {
      it('should have a tui-search-page', () => {
        expect(wrapper.find('.tui-search-page').exists()).toBeTruthy()
      })
    })
  })
  describe('Behaviour', () => {
    beforeAll(() => {
      jest.clearAllMocks()
    })
    describe('when open details', () => {
      beforeEach(() => {
        wrapper.setData({
          form: {
            hotelName: 'test',
            checkIn: '2020-10-10',
            checkOut: '2020-10-10',
            adults: '2',
          },
        })
      })
      it('should call router', () => {
        expect($router.push).not.toHaveBeenCalled()

        wrapper.vm.openDetails({ hotel: { hotel: { id: 1 } } })

        expect($router.push).toHaveBeenCalled()
      })
    })
    describe('when try to search a hotel', () => {
      describe('and form is valid', () => {
        beforeEach(() => {
          jest.clearAllMocks()
          wrapper.setData({
            form: {
              hotelName: 'test',
              checkIn: '2020-10-10',
              checkOut: '2020-10-10',
              adults: '2',
            },
          })
        })
        it('should call router', () => {
          expect($router.push).not.toHaveBeenCalled()

          wrapper.vm.onSearch(wrapper.vm.form)

          expect($router.push).toHaveBeenCalled()
        })
      })
      describe('and form is invalid', () => {
        beforeEach(() => {
          jest.clearAllMocks()
          wrapper.setData({
            form: {
              hotelName: '',
              checkIn: '2020-10-10',
              checkOut: '2020-10-10',
              adults: '2',
            },
          })
        })
        it('should show toaster message', () => {
          expect(wrapper.vm.showToaster).toBe(false)

          wrapper.vm.onSearch(wrapper.vm.form)

          expect(wrapper.vm.showToaster).toBe(true)
        })
      })
    })
  })
})

function mountWrapper(localVue, stubs, router) {
  return shallowMount(Search, {
    localVue,
    stubs,
    mocks: {
      $t: jest.fn().mockImplementation((x) => x),
      $router: router,
      $route: {
        query: {
          adults: '2',
          checkInDate: '2021-04-15',
          checkOutDate: '2021-04-16',
          hotelName: 'a',
        },
      },
    },
  })
}
