import { validateEmail }from './validateEmail'

/* eslint-disable */
describe('Patterns validations component', () => {
  
  it('it should return true if correct email', () => {
    expect(validateEmail('your@email.com')).toBe(true)
  })
})