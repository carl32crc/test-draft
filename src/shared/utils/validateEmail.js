import { patterns } from '../patterns'

const { email } = patterns

const validateEmail = (value)=> email.test(value)

export {
  validateEmail    
}