import { shallowMount } from '@vue/test-utils'
import Card from '@/components/Card.vue'

let wrapper

beforeEach(() => {
  wrapper = shallowMount(Card, {
    propsData: { 
      title: `card title`, 
      img: `img.jpg`,
      description: `blah`, 
      field1: `first field` 
    },
    mocks: {},
    stubs: {},
    methods: {}
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe(`Card`, () => {
  test(`testing component props`, () => {
    expect(wrapper.find(`.title`).text())
      .toBe(`card title`)
    expect(wrapper.find(`img`).attributes().src)
      .toBe(`img.jpg`)
    expect(wrapper.find(`.description`).text())
      .toBe(`blah`)
    expect(wrapper.find(`.field1`).text())
      .toBe(`first field`)
  })

  test(`regression test`, () => {
    expect(wrapper.element)
      .toMatchSnapshot()
  })  

})