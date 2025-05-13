import { Meta, StoryObj } from '@storybook/react'
import { DatePicker } from './date-picker'

export default { component: DatePicker } satisfies Meta<typeof DatePicker>

type Story = StoryObj<typeof DatePicker>

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
    value: '1999-03-26'
  },
}


