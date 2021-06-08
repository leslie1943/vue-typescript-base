import { shallowMount } from '@vue/test-utils'
import HelloWorld from '../../src/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('render props.msg when passed', () => {
    const msg = 'new message'
    const wrpper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrpper.text()).toMatch(msg)
  })
})
