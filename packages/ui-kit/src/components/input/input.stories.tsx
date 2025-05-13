import { Meta, StoryObj } from '@storybook/react'
import { Input } from './input'

export default { component: Input } satisfies Meta<typeof Input>

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
  },
}


