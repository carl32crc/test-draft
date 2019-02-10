import { VariableComponent } from './VariableComponent'
import { VariableStrategy } from './VariableStrategy'

export const variableDecorator = {
  strategy: VariableStrategy('VARIABLE'),
  component: VariableComponent
}
