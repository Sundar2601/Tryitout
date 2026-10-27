import React from 'react'
import figma from '@figma/code-connect'
import { Button } from './Button'

figma.connect(
  Button,
  'https://www.figma.com/design/BnLoVR6P3cMeT3GATKHXls/Design-System?node-id=3-3',
  {
    example: () => <Button label="Button" variant="primary" />,
  }
)
