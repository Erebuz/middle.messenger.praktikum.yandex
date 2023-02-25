import isEqual from './isEqual'
import { describe, expect, test } from '@jest/globals'

describe('isEqual module', () => {
  test('test', () => {
    const result = isEqual({ foo: 'bar' }, { foo: 'bar' })

    expect(result).toBe(true)
  })
})
