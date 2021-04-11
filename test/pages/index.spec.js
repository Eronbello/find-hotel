import { createLocalVue, shallowMount } from '@vue/test-utils'
import Index from '@/pages/index.vue'

describe('Index', () => {
  const localVue = createLocalVue()

  let wrapper
  const stubs = {}
  const $router = { push: jest.fn() }

  beforeEach(() => {
    wrapper = mountWrapper(localVue, stubs, $router)
  })

  describe('Components', () => {
    describe('when component is loaded', () => {
      it('should have a tui-main-page', () => {
        expect(wrapper.find('.tui-main-page').exists()).toBeTruthy()
      })
      it('should have a tui-search__title', () => {
        expect(wrapper.find('.tui-search__title').exists()).toBeTruthy()
      })
      it('should have a tui-recommended__title', () => {
        expect(wrapper.find('.tui-recommended__title').exists()).toBeTruthy()
      })
      it('should have a tui-recommended__list', () => {
        expect(wrapper.find('.tui-recommended__list').exists()).toBeTruthy()
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

        wrapper.vm.openDetails(wrapper.vm.hotelList[0])

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
  return shallowMount(Index, {
    localVue,
    stubs,
    mocks: {
      $t: jest.fn().mockImplementation((x) => x),
      $router: router,
    },
  })
}
