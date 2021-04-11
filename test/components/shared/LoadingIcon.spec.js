import { createLocalVue, shallowMount } from '@vue/test-utils'
import LoadingIcon from '@/components/shared/LoadingIcon.vue'

describe('LoadingIcon', () => {
  const localVue = createLocalVue()

  let wrapper
  const stubs = {}

  beforeEach(() => {
    wrapper = mountWrapper(localVue, stubs)
  })

  describe('Components', () => {
    describe('when component is loaded', () => {
      it('should have a tui-loading-icon', () => {
        expect(wrapper.find('.tui-loading-icon').exists()).toBeTruthy()
      })
    })
  })
})

function mountWrapper(localVue, stubs) {
  return shallowMount(LoadingIcon, {
    localVue,
    stubs,
    mocks: {
      $t: jest.fn().mockImplementation((x) => x),
    },
  })
}
