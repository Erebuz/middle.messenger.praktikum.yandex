import { expect } from 'chai'
import isEqual from "./isEqual";



describe('isEqual module', () => {
  describe('set', () => {
    it('should return False if objects is not equals', () => {
      const objA = { bar: 'foo' }
      const objB = { bar: 'fuu' }

      const res = isEqual(objA, objB)

      expect(res).to.eq(false)
    })

    it('should return True if objects is equals', () => {})
  })
})
