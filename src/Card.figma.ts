// url=https://www.figma.com/design/BnLoVR6P3cMeT3GATKHXls/Design-System?node-id=23-200
// source=src/Card.tsx
// component=Card
import figma from 'figma'
const instance = figma.selectedInstance

const titleLayer = instance.findText('Title')
const title = titleLayer.type === 'TEXT' ? titleLayer.textContent : ''
const descriptionLayer = instance.findText('Description')
const description = descriptionLayer.type === 'TEXT' ? descriptionLayer.textContent : ''
const actionLayer = instance.findText('Label')
const actionLabel = actionLayer.type === 'TEXT' ? actionLayer.textContent : ''

export default {
  example: figma.code`<Card title="${title}" description="${description}" actionLabel="${actionLabel}" />`,
  imports: ['import { Card } from "./Card"'],
  id: 'card-default',
  metadata: { nestable: true }
}
