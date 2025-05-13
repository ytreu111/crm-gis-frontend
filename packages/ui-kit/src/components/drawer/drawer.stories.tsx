import { Meta, StoryObj } from '@storybook/react'
import { Drawer } from './drawer'

export default { component: Drawer } satisfies Meta<typeof Drawer>

type Story = StoryObj<typeof Drawer>

export const Default: Story = {
  args: {
    open: true
  },
}
