import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Button from '@/components/Button.vue'

let wrapper

beforeEach(() => {
  wrapper = shallowMount(Button, {
    propsData: { 
      to: `somewhere`, 
      text: `click` 
    },
    mocks: {},
    stubs: {
      RouterLink: RouterLinkStub
    },
    methods: {}
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe(`Buttom`, () => {
  test(`testing component props`, () => {
    expect(wrapper.find(`.button`).text())
      .toBe(`click`)
    expect(wrapper.find(RouterLinkStub).props().to)
      .toEqual({ "name": `somewhere` })
  })
    
  test(`regression test`, () => {
    expect(wrapper.element)
      .toMatchSnapshot()
  })  

})