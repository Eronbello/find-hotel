import { createLocalVue, shallowMount } from '@vue/test-utils'
import Footer from '@/components/structure/Footer.vue'

describe('Footer', () => {
  const localVue = createLocalVue()

  let wrapper
  const stubs = {}

  beforeEach(() => {
    wrapper = mountWrapper(localVue, stubs)
  })

  describe('Components', () => {
    describe('when component is loaded', () => {
      it('should have a tui-footer', () => {
        expect(wrapper.find('.tui-footer').exists()).toBeTruthy()
      })
      it('should have a tui-footer__link', () => {
        expect(wrapper.find('.tui-footer__link').exists()).toBeTruthy()
      })
    })
  })
})

function mountWrapper(localVue, stubs) {
  return shallowMount(Footer, {
    localVue,
    stubs,
    mocks: {
      $t: jest.fn().mockImplementation((x) => x),
    },
  })
}
