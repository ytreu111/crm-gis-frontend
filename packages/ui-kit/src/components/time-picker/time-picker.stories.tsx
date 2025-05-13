import { Meta, StoryObj } from '@storybook/react'
import { TimePicker } from './time-picker'

export default { component: TimePicker } satisfies Meta<typeof TimePicker>

type Story = StoryObj<typeof TimePicker>

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
    onChange: (v) => {
      console.log(v)
    },
  },
}


