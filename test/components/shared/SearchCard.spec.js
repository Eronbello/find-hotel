import { createLocalVue, shallowMount } from '@vue/test-utils'
import SearchCard from '@/components/shared/SearchCard.vue'

describe('SearchCard', () => {
  const localVue = createLocalVue()

  let wrapper
  const stubs = {}

  const form = {
    hotelName: '',
    checkIn: '',
    checkOut: '',
    adults: '',
  }

  const propsData = {
    form,
  }

  beforeEach(() => {
    wrapper = mountWrapper(localVue, stubs, propsData)
  })

  describe('Components', () => {
    describe('when component is loaded', () => {
      it('should have a tui-search-card', () => {
        expect(wrapper.find('.tui-search-card').exists()).toBeTruthy()
      })
    })
  })
})

function mountWrapper(localVue, stubs, propsData) {
  return shallowMount(SearchCard, {
    localVue,
    stubs,
    propsData,
    mocks: {
      $t: jest.fn().mockImplementation((x) => x),
    },
  })
}
