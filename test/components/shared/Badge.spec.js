import { createLocalVue, shallowMount } from '@vue/test-utils'
import Badge from '@/components/shared/Badge.vue'

describe('Badge', () => {
  const localVue = createLocalVue()

  let wrapper
  const stubs = {}

  const message = 'test message'

  const propsData = {
    message,
  }

  beforeEach(() => {
    wrapper = mountWrapper(localVue, stubs, propsData)
  })

  describe('Components', () => {
    describe('when component is loaded', () => {
      it('should have a tui-Badge', () => {
        expect(wrapper.find('.tui-badge').exists()).toBeTruthy()
      })
      it('should have the right message', () => {
        expect(wrapper.vm.message).toBe(message)
      })
    })
  })
})

function mountWrapper(localVue, stubs, propsData) {
  return shallowMount(Badge, {
    localVue,
    stubs,
    propsData,
    mocks: {
      $t: jest.fn().mockImplementation((x) => x),
    },
  })
}
