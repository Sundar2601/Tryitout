// url=https://www.figma.com/design/BnLoVR6P3cMeT3GATKHXls/Design-System?node-id=23-197
// source=src/Input.tsx
// component=Input
import figma from 'figma'
const instance = figma.selectedInstance

const labelLayer = instance.findText('Label')
const label = labelLayer.type === 'TEXT' ? labelLayer.textContent : ''
const placeholderLayer = instance.findText('Placeholder')
const placeholder = placeholderLayer.type === 'TEXT' ? placeholderLayer.textContent : ''
const helperLayer = instance.findText('Helper text')
const helperText = helperLayer.type === 'TEXT' ? helperLayer.textContent : ''

export default {
  example: figma.code`<Input label="${label}" placeholder="${placeholder}" helperText="${helperText}" />`,
  imports: ['import { Input } from "./Input"'],
  id: 'input-default',
  metadata: { nestable: true }
}
