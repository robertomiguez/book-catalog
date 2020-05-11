import { shallowMount } from '@vue/test-utils'
import Card from '@/components/Card.vue'

let wrapper

beforeEach(() => {
  wrapper = shallowMount(Card, {
    propsData: { 
      title: `card title`, 
      img: `img.jpg`,
      description: `blah` 
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
  })

  test(`regression test`, () => {
    expect(wrapper.element)
      .toMatchSnapshot()
  })  

})