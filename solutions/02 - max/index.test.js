import { expect } from 'chai'
import max from './index'

describe('max', () => {
  it('should return the largest number in a list', () => {
    const largest = max([44, 0, 19, 500, -90])
    expect(largest).to.equal(500)
  })

  it('should handle an empty list', () => {
    const largest = max([])
    expect(largest).to.deep.equal([])
  })

  it('should handle a list with a single element', () => {
    const largest = max([-90])
    expect(largest).to.equal(-90)
  })
})
