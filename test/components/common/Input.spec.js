/* eslint-disable no-unused-expressions */
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Input from '@/components/common/Input.vue'

describe('Input', () => {
  const localVue = createLocalVue()

  let wrapper
  const stubs = {}

  const label = 'test label'

  const propsData = {
    label,
  }

  beforeEach(() => {
    wrapper = mountWrapper(localVue, stubs, propsData)
  })

  describe('Components', () => {
    describe('when component is loaded', () => {
      it('should have a tui-input', () => {
        expect(wrapper.find('.tui-input').exists()).toBeTruthy()
      })
      it('should have the right label', () => {
        expect(wrapper.vm.label).toBe(label)
      })
    })
  })
  describe('Behaviour', () => {
    describe.each`
      event
      ${'change'}
      ${'blur'}
      ${'focus'}
    `('when input emits $event', ({ event }) => {
      it('should be emitted again by the component', () => {
        wrapper.find('input').trigger(event)

        expect(wrapper.emitted()[event]).toBeTruthy
      })
    })
  })
})

function mountWrapper(localVue, stubs, propsData) {
  return shallowMount(Input, {
    localVue,
    stubs,
    propsData,
    mocks: {
      $t: jest.fn().mockImplementation((x) => x),
    },
  })
}
