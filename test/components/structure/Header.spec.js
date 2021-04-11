import { createLocalVue, shallowMount } from '@vue/test-utils'
import Header from '@/components/structure/Header.vue'

describe('Header', () => {
  const localVue = createLocalVue()

  let wrapper
  const stubs = {
    NuxtLink: true,
  }

  beforeEach(() => {
    wrapper = mountWrapper(localVue, stubs)
  })

  describe('Components', () => {
    describe('when component is loaded', () => {
      it('should have a tui-header', () => {
        expect(wrapper.find('.tui-header').exists()).toBeTruthy()
      })
      it('should have a tui-search-card__action', () => {
        expect(wrapper.find('.tui-search-card__action').exists()).toBeTruthy()
      })
    })
  })
})

function mountWrapper(localVue, stubs) {
  return shallowMount(Header, {
    localVue,
    stubs,
    mocks: {
      $t: jest.fn().mockImplementation((x) => x),
    },
  })
}
