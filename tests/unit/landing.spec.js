import { shallowMount } from '@vue/test-utils'
import Landing from '@/views/Landing.vue'

let wrapper

beforeEach(() => {
  wrapper = shallowMount(Landing, {
    propsData: {},
    mocks: {},
    stubs: {},
    methods: {}
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe(`Landing`, () => {
  test(`testing component data`, () => {
    expect(wrapper.find(`.leading-text`).text())
      .toBe(`A website about book catalogs.`)
  })  

  test(`regression test`, () => {
    expect(wrapper.element)
      .toMatchSnapshot()
  })  

})