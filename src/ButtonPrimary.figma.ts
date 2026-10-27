// url=https://www.figma.com/design/BnLoVR6P3cMeT3GATKHXls/Design-System?node-id=23-195
// source=src/Button.tsx
// component=Button
import figma from 'figma'
const instance = figma.selectedInstance

const labelLayer = instance.findText('Label')
const label = labelLayer.type === 'TEXT' ? labelLayer.textContent : 'Button'

export default {
  example: figma.code`<Button label="${label}" variant="primary" />`,
  imports: ['import { Button } from "./Button"'],
  id: 'button-primary',
  metadata: { nestable: true }
}
