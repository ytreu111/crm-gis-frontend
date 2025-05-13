import { Meta, StoryObj } from '@storybook/react'
import { TextArea } from './text-area'

export default { component: TextArea } satisfies Meta<typeof TextArea>

type Story = StoryObj<typeof TextArea>

export const Default: Story = {
  args: {
  },
}


