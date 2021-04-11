import { createLocalVue, shallowMount } from '@vue/test-utils'
import LocaleIcon from '@/components/shared/LocaleIcon.vue'

describe('LocaleIcon', () => {
  const localVue = createLocalVue()

  let wrapper
  const stubs = {}

  beforeEach(() => {
    wrapper = mountWrapper(localVue, stubs)
  })

  describe('Components', () => {
    describe('when component is loaded', () => {
      it('should have a tui-locale-icon', () => {
        expect(wrapper.find('.tui-locale-icon').exists()).toBeTruthy()
      })
    })
  })
})

function mountWrapper(localVue, stubs) {
  return shallowMount(LocaleIcon, {
    localVue,
    stubs,
    mocks: {
      $t: jest.fn().mockImplementation((x) => x),
    },
  })
}
