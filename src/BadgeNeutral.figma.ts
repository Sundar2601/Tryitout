// url=https://www.figma.com/design/BnLoVR6P3cMeT3GATKHXls/Design-System?node-id=23-199
// source=src/Badge.tsx
// component=Badge
import figma from 'figma'
const instance = figma.selectedInstance

const labelLayer = instance.findText('Label')
const label = labelLayer.type === 'TEXT' ? labelLayer.textContent : ''

export default {
  example: figma.code`<Badge label="${label}" variant="neutral" />`,
  imports: ['import { Badge } from "./Badge"'],
  id: 'badge-neutral',
  metadata: { nestable: true }
}
