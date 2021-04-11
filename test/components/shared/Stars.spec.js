import { createLocalVue, shallowMount } from '@vue/test-utils'
import Stars from '@/components/shared/Stars.vue'

describe('Stars', () => {
  const localVue = createLocalVue()

  let wrapper
  const stubs = {}

  const rating = 3

  const propsData = {
    rating,
  }

  beforeEach(() => {
    wrapper = mountWrapper(localVue, stubs, propsData)
  })

  describe('Components', () => {
    describe('when component is loaded', () => {
      it('should have a tui-rating', () => {
        expect(wrapper.find('.tui-rating').exists()).toBeTruthy()
      })
      it('should have the 3 stars', () => {
        expect(wrapper.findAll('.tui-rating__star').length).toBe(3)
      })
    })
  })
})

function mountWrapper(localVue, stubs, propsData) {
  return shallowMount(Stars, {
    localVue,
    stubs,
    propsData,
    mocks: {
      $t: jest.fn().mockImplementation((x) => x),
    },
  })
}
