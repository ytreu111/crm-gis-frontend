import { Meta, StoryObj } from '@storybook/react'
import { InputNumber } from './input-number'

export default { component: InputNumber } satisfies Meta<typeof InputNumber>

type Story = StoryObj<typeof InputNumber>

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
    onChange: (v) => {
      console.log(v)
    },
  },
}


