import { createLocalVue, shallowMount } from '@vue/test-utils'
import Toaster from '@/components/shared/Toaster.vue'

describe('Toaster', () => {
  const localVue = createLocalVue()

  let wrapper
  const stubs = {}

  const message = 'test message'

  const propsData = {
    message,
    color: 'red',
    show: true,
  }

  beforeEach(() => {
    wrapper = mountWrapper(localVue, stubs, propsData)
  })

  describe('Components', () => {
    describe('when component is loaded', () => {
      it('should have a .tui-toaster', () => {
        expect(wrapper.find('.tui-toaster').exists()).toBeTruthy()
      })
      it('should have the right message', () => {
        expect(wrapper.vm.message).toBe(message)
      })
    })
  })
})

function mountWrapper(localVue, stubs, propsData) {
  return shallowMount(Toaster, {
    localVue,
    stubs,
    propsData,
    mocks: {
      $t: jest.fn().mockImplementation((x) => x),
    },
  })
}
