import { CompositeDecorator } from 'draft-js'

import { variableDecorator } from './variableDecorators'

export const decorator = new CompositeDecorator([
  variableDecorator
])