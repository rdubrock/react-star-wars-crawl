import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Crawl from './Crawl'

const testString1 = 'testString1'
const testString2 = 'testString2'
const testString3 = 'testString3'

describe('<Crawl>', () => {
  it('should pass text prop values correctly', () => {
    const wrapper = shallow(
      <Crawl 
        title={testString1} 
        subTitle={testString2}
        text={testString3}
      />
    )

    expect(wrapper.instance().props.title).to.equal(testString1)
    expect(wrapper.instance().props.subTitle).to.equal(testString2)
    expect(wrapper.instance().props.text).to.equal(testString3)
  })
})
